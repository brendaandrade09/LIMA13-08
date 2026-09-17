const login = document.getElementById("txtLogin");
const senha = document.getElementById("txtSenha");
const divResposta = document.getElementById("resposta");
const botao = document.getElementById("btnAcessar");

const loginBanco="email@gmail.com";
const senhaBanco="1234";

function mostrar() {
const loginV = login.value;
const senhaV = senha.value;
// divResposta.innerHTML = `
// <p><strong>Login:</strong>${loginV}<strong> Senha:</strong>${senhaV}</p>
// `
if(loginV === loginBanco && senhaV === senhaBanco){
divResposta.textContent="Login efetuado com sucesso! Redirecionando...";
setTimeout(()=>{
    window.location.href="../paginas/home.html"
}, 2000);
} else{
divResposta.innerHTML = `<p>Login ou senha incorretos.</p>`
}
}
botao.addEventListener('click', mostrar);