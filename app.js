let amigos = [];
let sorteioFeito = false;
let pares = [];
let indiceAtual = 0;

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (!nome) {
    alert('Digite um nome válido!');
    return;
  }

  if (amigos.includes(nome)) {
    alert('Este nome já foi adicionado.');
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
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function sortearAmigo() {
  const resultado = document.getElementById('resultado');

  if (amigos.length < 2) {
    alert('Adicione pelo menos 2 amigos para sortear.');
    return;
  }

  if (!sorteioFeito) {
    const sorteados = [...amigos];
    embaralhar(sorteados);

    pares = amigos.map((amigo, i) => {
      let indice = i;
      // Se for o último, evitar que tire a si mesmo
      if (amigo === sorteados[indice]) {
        [sorteados[indice], sorteados[(indice + 1) % sorteados.length]] = [sorteados[(indice + 1) % sorteados.length], sorteados[indice]];
      }
      return { de: amigo, para: sorteados[indice] };
    });

    sorteioFeito = true;
    indiceAtual = 0;
    resultado.innerHTML = '';
  }

  if (indiceAtual >= pares.length) {
    alert('Todos os pares já foram sorteados!');
    return;
  }

  const par = pares[indiceAtual];
  const item = document.createElement('li');
  item.textContent = `${par.de} → ${par.para}`;
  item.classList.add('fade-in');
  document.getElementById('resultado').appendChild(item);

  indiceAtual++;
}

function reiniciar() {
  amigos = [];
  pares = [];
  indiceAtual = 0;
  sorteioFeito = false;
  document.getElementById('listaAmigos').innerHTML = '';
  document.getElementById('resultado').innerHTML = '';
}
