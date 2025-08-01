// Lista para armazenar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, digite um nome válido.');
    return;
  }

  // Evita nomes duplicados
  if (amigos.includes(nome)) {
    alert('Este nome já foi adicionado!');
    input.value = '';
    return;
  }

  amigos.push(nome);
  input.value = '';
  exibirLista();
}

function exibirLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach((nome) => {
    const item = document.createElement('li');
    item.textContent = nome;
    lista.appendChild(item);
  });
}

function embaralhar(array) {
  // Algoritmo de Fisher-Yates para embaralhar
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function sortearAmigo() {
  if (amigos.length < 3) {
    alert('Adicione pelo menos 3 amigos para realizar o sorteio!');
    return;
  }

  // Copia e embaralha a lista de amigos
  const sorteados = [...amigos];
  embaralhar(sorteados);

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    const amigoSecreto = sorteados[(i + 1) % amigos.length]; // garante que ninguém pegue a si mesmo

    const item = document.createElement('li');
    item.textContent = `${amigo} → ${amigoSecreto}`;
    resultado.appendChild(item);
  }
}

function reiniciar() {
    amigos = []
    document.getElementById('listaAmigos').innerHTML = ''
    document.getElementsById('resultado').innerHTML = ''
}
