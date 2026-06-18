## Mudanças

### 1. `src/routes/index.tsx`
Mover `<Resultados />` para entre `<Hero />` e `<PorQueConfiar />` (remover da posição atual entre ComoFunciona e Faq).

### 2. `src/components/landing/Hero.tsx` (linha 14)
Remover `overflow-hidden` da section do Hero, para que o card flutuante (com margem negativa) não seja cortado.

Antes:
```
className="relative min-h-screen flex items-center bg-[#00A3D7] overflow-hidden pt-24"
```
Depois:
```
className="relative min-h-screen flex items-center bg-[#00A3D7] pt-24"
```
Os elementos decorativos internos do Hero já são `absolute inset-...` dentro de divs com `overflow-hidden` próprio, então a remoção é segura.

### 3. Reescrever `src/components/landing/Resultados.tsx`

**Section wrapper**
- `relative z-20 -mt-[60px] lg:-mt-20`
- Sem background próprio (transparente), com padding inferior (`pb-12 lg:pb-16`) para dar respiro antes da próxima seção.
- Container `max-w-5xl mx-auto px-5 lg:px-8`.

**Card**
- `bg-[#1A1A2E] rounded-2xl shadow-xl px-6 py-10 lg:px-12 lg:py-12`
- Grid: `grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:divide-x lg:divide-white/15`
- Cada item: número em `#F5A623`, font display, `text-4xl sm:text-5xl lg:text-6xl`, bold; label em branco, uppercase, `tracking-[0.15em]`, `text-[11px] sm:text-xs font-semibold`.
- Remover gradiente dark navy interno e a linha verde brilhante abaixo do card.

**Animação count-up (sem dependências)**
- Hook interno `useCountUp(target, { duration: 2000, start: boolean })` que:
  - Se `prefers-reduced-motion` → retorna `target` imediatamente.
  - Caso contrário, ao `start` virar `true`, usa `requestAnimationFrame` com easing `easeOutCubic` (`1 - Math.pow(1 - t, 3)`) por ~2s, atualizando state com `Math.round(target * eased)`.
- Componente usa um `ref` no card + `IntersectionObserver` (threshold 0.3) que dispara `start = true` uma única vez, depois desconecta.
- Cada item renderiza `prefix + value + suffix`:
  - `+` / `300` / ``
  - `+R$ ` / `200` / `mi`
  - `+` / `40` / ``
  - `` / `95` / `%`

**SSR safety**
- IntersectionObserver e matchMedia atrás de `typeof window !== 'undefined'`; valor inicial é `0` (ou `target` em reduced-motion), evitando mismatch grave — render inicial pode mostrar `0`, animação inicia ao montar/ver.

### 4. Nada mais muda
Demais componentes intactos. Animação GSAP `.gsap-fade-up` pode ser mantida no card para o fade-in do container.
