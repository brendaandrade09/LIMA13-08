function ola(){
const resposta = document.getElementById("resp");
resposta.innerText = "Olá!!";
}
const botao = document.getElementById("btnClicar");
botao.addEventListener("click", ola);
