const botao = document.getElementById("btnOla");
const resposta = document.getElementById("resp");
function ola(){
    resposta.textContent = "Olá!!! Seja bem-vindo(a)!"
}
function somar(){
    const n1 = 10;
    const n2 = 5;
    const r = n1 + n2;
    resposta.innerHTML = r.toString();
}
function alterarCor(){
    resposta.classList.toggle("active");
}
botao.addEventListener("click",alterarCor);