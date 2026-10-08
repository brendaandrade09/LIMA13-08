const nomeSalvo = localStorage.getItem('alunoNome');
const cidadeSalva = localStorage.getItem('alunoCidade');
const obsSalva = localStorage.getItem('alunoObs');

document.querySelector("#resultadoNome").textContent = nomeSalvo;
document.querySelector("#resultadoCidade").textContent = cidadeSalva;
document.querySelector("#resultadoObservacoes").textContent = obsSalva;