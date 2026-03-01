/*** src/utils/smoothScroll.ts ***/
/**
 * Realiza uma rolagem suave até um elemento específico ou até o topo da página.
 * Utiliza a função de easing Ease In Out Quad para uma animação sofisticada.
 *
 * @param targetId - O ID do elemento alvo. Se omitido ou null, rola para o topo.
 * @param offset - Compensação em pixels para headers fixos (padrão: 80px).
 */
export function smoothScroll(targetId?: string | null, offset: number = 80) {
  // Se não estiver no navegador, não faz nada
  if (typeof window === "undefined") return;

  const startPosition = window.scrollY;
  let distance = 0;

  if (targetId) {
    const element = document.getElementById(targetId);
    if (!element) return;

    // getBoundingClientRect().top retorna a posição relativa ao viewport.
    // A distância que precisamos percorrer é exatamente essa posição menos o offset.
    const elementPosition = element.getBoundingClientRect().top;
    distance = elementPosition - offset;
  } else {
    // Se não houver targetId, rola para o topo (posição 0)
    // A distância é negativa da posição atual até 0.
    distance = -startPosition;
  }

  // Duração dinâmica baseada na distância para evitar sensação de "atraso" em telas menores
  // Mínimo de 400ms (rápido para distâncias curtas), Máximo de 1000ms
  const duration = Math.min(Math.max(Math.abs(distance) / 1.5, 400), 1000);
  let start: number | null = null;

  function animation(currentTime: number) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;

    // Função de easing (suavização) - Ease In Out Quad
    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;

      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}
