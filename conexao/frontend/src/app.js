const form = document.querySelector('#formProduto');
const inputProduto = document.querySelector('#txtProduto');
const mensagem = document.querySelector('#mensagem');
const listaProdutos = document.querySelector('#listaProdutos');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nomeProduto = inputProduto.value;
    mensagem.textContent = 'Enviando para o servidor...';
    mensagem.className = 'Carregando...';
    try {
        const resposta = await fetch('http://localhost:3000/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ produto: nomeProduto })
        });
        const dados = await resposta.json();
        if (resposta.ok) {
            mensagem.textContent = dados.mensagem;
            mensagem.className = 'sucesso';
            const li = document.createElement('li');
            li.textContent = `ID ${dados.id_inserido}:${nomeProduto}`;
            listaProdutos.appendChild(li);
            inputProduto.value = '';
        } else {
            mensagem.textContent = `Erro: ${dados.erro}`;
            mensagem.className = 'erro';
        }
    } catch (error) {
        console.error("Erro na requisição", erro);
        mensagem.textContent = `Falha ao conectar com o servidor. Verifique se o node está funcionando.`;
        mensagem.className = 'erro';
    }
})