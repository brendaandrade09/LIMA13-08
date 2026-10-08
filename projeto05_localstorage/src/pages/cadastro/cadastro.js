const formulario = document.querySelector("#formCadastro");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.querySelector("#txtNome").value;
    const cidade = document.querySelector("#txtCidade").value;
    const observacoes = document.querySelector("#txtObservacoes").value;
localStorage.setItem('alunoNome',nome);
localStorage.setItem('alunoCidade',cidade);
localStorage.setItem('alunoObs',observacoes);
window.location.href="../consulta/consulta.html";
})