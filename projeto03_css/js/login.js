let login = document.getElementById("txtLogin");
let senha = document.getElementById("txtSenha");
let botao = document.getElementById("btnClicar");

const loginBd = "email@gmail.com";
const senhaBd = "12345";

function clicar() {
    let usuarioDigitado = login.value
    let senhaDigitada = senha.value
    if(senhaDigitada === senhaBd && usuarioDigitado === loginBd){
 window.location.href='../../index.html';   
}else{
    alert(`Login ou senha incorretos!!!`)
}
}
botao.addEventListener("click", clicar)