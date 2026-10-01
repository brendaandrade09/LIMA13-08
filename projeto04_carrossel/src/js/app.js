const telaCarousel = document.getElementById("carousel");
const btnEsquerdo = document.querySelector('#btnEsquerdo');
const btnDireito = document.querySelector('#btnDireito');
const cores = [
    'var(--azul-300)',
    'var(--rosa)',
    'var(--vermelho-vivo)'
];

const images = [
    './images/hubble02-cke.jpg',
    './images/imagem-do-dia-nasa-galaxia-e1733176936252.webp',
    './images/images.jpg'
];

let indiceAtual = 0;
let temporizador;

function atualizarCarrossel() {
    // telaCarousel.style.backgroundColor = cores[indiceAtual];
    telaCarousel.style.backgroundImage = `url('${images[indiceAtual]}')`;
    telaCarousel.style.backgroundSize = 'cover';
    telaCarousel.style.backgroundPosition = 'center';
}
btnDireito.addEventListener("click", () => {
    indiceAtual++;
    if (indiceAtual >= images.length) {
        indiceAtual = 0;
    }
    atualizarCarrossel();
    clearTimeout(temporizador);
    temporizador = setTimeout(() => {
        btnDireito.click();
    }, 3000);
})

btnEsquerdo.addEventListener("click", () => {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = images.length - 1;
    }
    atualizarCarrossel();
    clearTimeout(temporizador);
    temporizador = setTimeout(() => {
        btnDireito.click();
    }, 3000);
});

atualizarCarrossel();
clearTimeout(temporizador);
temporizador = setTimeout(() => {
    btnDireito.click();
}, 3000);