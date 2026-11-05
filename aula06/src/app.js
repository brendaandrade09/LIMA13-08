document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-parallax');
    const camadas = document.querySelectorAll('.camada');
    const prefereReducaoMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefereReducaoMovimento) return;

    let ticado = false;

    function aplicarParallax() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const heroHeight = heroSection ? heroSection.offsetHeight : 0;

        if (scrollY <= heroHeight) {
            camadas.forEach((camada) => {
                const velocidade = parseFloat(camada.getAttribute('data-speed')) || 0;
                const deslocamento = -(scrollY * velocidade);
                camada.style.transform = `translate3d(0, ${deslocamento}px, 0)`;
            });
        }
        ticado = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticado) {
            window.requestAnimationFrame(aplicarParallax);
            ticado = true;
        }
    }, { passive: true });
});