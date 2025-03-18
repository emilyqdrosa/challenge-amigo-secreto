let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value.trim().toUpperCase();

    if (!nome) {
        alert('Inválido! Insira um nome.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Esse nome já foi inserido!');
        return;
    }

    amigos.push(nome);
    console.log(amigos);
    limparCampo();
    atualizarAmigos();
}

function limparCampo(){
    campo = document.querySelector('input')
    campo .value = "";
}

function atualizarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let qntDeNomes = 0; qntDeNomes < amigos.length; qntDeNomes++) {
        const li = document.createElement('li')
        li.textContent = amigos[qntDeNomes]
        lista.appendChild(li)
    }
}

function sortearAmigo() {
    if (amigos == [] || amigos.length <= 2) {
        alert('Você ainda não adicionou nomes suficientes! Adicione ao menor trêS nomes para fazer o sorteio')
    } else {
        const indice = Math.floor(Math.random() * amigos.length)
        const amigoSecreto = amigos[indice]

        const ul = document.getElementById('resultado')
        ul.innerHTML = ''

        const li = document.createElement('li')
        li.textContent = `Seu amigo secreto sorteado é: ${amigoSecreto}`
        ul.appendChild(li)
        amigos = [];
        
        atualizarAmigos();
    }
}