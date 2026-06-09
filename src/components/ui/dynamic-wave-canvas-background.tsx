import { useEffect, useRef } from "react";

interface HeroWaveProps {
  className?: string;
  // Palette in 0-1 RGB for blending; defaults to brand blue #00A3D7
  baseR?: number;
  baseG?: number;
  baseB?: number;
  accentR?: number;
  accentG?: number;
  accentB?: number;
}

const HeroWave = ({
  className,
  baseR = 0 / 255,
  baseG = 163 / 255,
  baseB = 215 / 255,
  accentR = 245 / 255,
  accentG = 166 / 255,
  accentB = 35 / 255,
}: HeroWaveProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let imageData: ImageData;
    let data: Uint8ClampedArray;
    const SCALE = 2;
    let rafId = 0;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth ?? window.innerWidth;
      const h = parent?.clientHeight ?? window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      width = Math.max(1, Math.floor(canvas.width / SCALE));
      height = Math.max(1, Math.floor(canvas.height / SCALE));
      imageData = ctx.createImageData(width, height);
      data = imageData.data;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const startTime = Date.now();

    const SIN_TABLE = new Float32Array(1024);
    const COS_TABLE = new Float32Array(1024);
    for (let i = 0; i < 1024; i++) {
      const angle = (i / 1024) * Math.PI * 2;
      SIN_TABLE[i] = Math.sin(angle);
      COS_TABLE[i] = Math.cos(angle);
    }
    const TWO_PI = Math.PI * 2;
    const fastSin = (x: number) => {
      const idx = Math.floor(((x % TWO_PI) / TWO_PI) * 1024) & 1023;
      return SIN_TABLE[idx < 0 ? idx + 1024 : idx];
    };
    const fastCos = (x: number) => {
      const idx = Math.floor(((x % TWO_PI) / TWO_PI) * 1024) & 1023;
      return COS_TABLE[idx < 0 ? idx + 1024 : idx];
    };

    const render = () => {
      const time = (Date.now() - startTime) * 0.001;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const u_x = (2 * x - width) / height;
          const u_y = (2 * y - height) / height;

          let a = 0;
          let d = 0;
          for (let i = 0; i < 4; i++) {
            a += fastCos(i - d + time * 0.5 - a * u_x);
            d += fastSin(i * u_y + a);
          }

          const wave = (fastSin(a) + fastCos(d)) * 0.5; // -1..1
          const intensity = 0.55 + 0.45 * wave; // brightness factor
          const accentMix = Math.max(0, 0.5 + 0.5 * fastSin(a * 1.5 + time * 0.2)) * 0.35;

          // Blend brand blue (base) with accent orange driven by wave
          const r = (baseR * (1 - accentMix) + accentR * accentMix) * intensity;
          const g = (baseG * (1 - accentMix) + accentG * accentMix) * intensity;
          const b = (baseB * (1 - accentMix) + accentB * accentMix) * intensity;

          const index = (y * width + x) * 4;
          data[index] = Math.max(0, Math.min(255, r * 255));
          data[index + 1] = Math.max(0, Math.min(255, g * 255));
          data[index + 2] = Math.max(0, Math.min(255, b * 255));
          data[index + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      if (SCALE > 1) {
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
      }

      rafId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(rafId);
    };
  }, [baseR, baseG, baseB, accentR, accentG, accentB]);

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "absolute inset-0 w-full h-full pointer-events-none"}
    />
  );
};

export default HeroWave;
