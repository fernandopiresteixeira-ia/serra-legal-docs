import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

interface InfiniteGridProps {
  /** Cor das linhas da grade base (estado normal) */
  baseColor?: string;
  /** Cor das linhas da grade revelada pelo cursor */
  activeColor?: string;
  /** Tamanho da célula em px */
  cellSize?: number;
  /** Raio do círculo de revelação em px */
  revealRadius?: number;
  /** Velocidade de deslocamento da grade */
  speed?: number;
  className?: string;
}

/**
 * Fundo decorativo: grade infinita que rola lentamente e revela uma camada
 * mais brilhante onde o cursor está. Pensado para ser usado como background
 * absoluto dentro de uma seção `relative`.
 */
export const InfiniteGrid: React.FC<InfiniteGridProps> = ({
  baseColor = "rgba(255,255,255,0.10)",
  activeColor = "rgba(245,166,35,0.55)",
  cellSize = 40,
  revealRadius = 300,
  speed = 0.5,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  useAnimationFrame(() => {
    offsetX.set((offsetX.get() + speed) % cellSize);
    offsetY.set((offsetY.get() + speed) % cellSize);
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-9999);
    mouseY.set(-9999);
  };

  const maskImage = useMotionTemplate`radial-gradient(${revealRadius}px circle at ${mouseX}px ${mouseY}px, black, transparent)`;
  const bgPosition = useMotionTemplate`${offsetX}px ${offsetY}px`;

  const baseGrid = `linear-gradient(to right, ${baseColor} 1px, transparent 1px), linear-gradient(to bottom, ${baseColor} 1px, transparent 1px)`;
  const activeGrid = `linear-gradient(to right, ${activeColor} 1px, transparent 1px), linear-gradient(to bottom, ${activeColor} 1px, transparent 1px)`;
  const bgSize = `${cellSize}px ${cellSize}px`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
      {/* Camada base */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: baseGrid,
          backgroundSize: bgSize,
          backgroundPosition: bgPosition,
        }}
      />
      {/* Camada ativa, revelada pelo cursor */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: activeGrid,
          backgroundSize: bgSize,
          backgroundPosition: bgPosition,
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      />
    </div>
  );
};

export default InfiniteGrid;
