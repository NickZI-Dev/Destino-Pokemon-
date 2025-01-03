const buttonClick = document.getElementById("button");
let pokemon = ["Charmander", "Bulbasaur", "Squirtle"];
const regiao = document.getElementById("regiao");
const pokemonGrama = document.getElementById("pokemon-1");
const pokemonFogo = document.getElementById("pokemon-2");
const pokemonAgua = document.getElementById("pokemon-3");
const form = document.getElementById("form");
const treinador = document.getElementById("nome-treinador");
let arrayTrainers = [];
let numberTrainers = 0;
let tabelaTreinadores = '';
let naoRepetiveis = '';
let naoRepetiveisTreinadores = '';

regiao.addEventListener("change", function () {
  if (regiao.value === "Sinnoh") {
    pokemonGrama.innerHTML =
      "<img src=./img/turtwig.png alt=turtwig-image> <h1>Turtwig</h1> <h2>Grama</h2> <h3>#387</h3>";
    pokemonFogo.innerHTML =
      "<img src=./img/chimchar.png alt=chimchar-image> <h1>Chimchar</h1> <h2>Chamas</h2> <h3>#390</h3>";
    pokemonAgua.innerHTML =
      "<img src=./img/piplup.png alt=piplup-image> <h1>Piplup</h1> <h2>Água</h2> <h3>#393</h3>";
    pokemon = ["Chimchar", "Turtwig", "Piplup"];
  } else if (regiao.value === "Hoenn") {
    pokemonGrama.innerHTML =
      "<img src=./img/treecko.png alt=treecko-image> <h1>Treecko</h1> <h2>Grama</h2> <h3>#252</h3>";
    pokemonFogo.innerHTML =
      "<img src=./img/torchic.png alt=torchic-image> <h1>Torchic</h1> <h2>Chamas</h2> <h3>#255</h3>";
    pokemonAgua.innerHTML =
      "<img src=./img/mudkip.png alt=mudkip-image> <h1>Mudkip</h1> <h2>Água</h2> <h3>#258</h3>";
    pokemon = ["Treecko", "Mudkip", "Torchic"];
  } else if (regiao.value === "Kanto") {
    pokemonGrama.innerHTML =
      "<img src=./img/bulbasaur.png alt=bulbasaur-image> <h1>Bulbasaur</h1> <h2>Grama</h2> <h3>#001</h3>";
    pokemonFogo.innerHTML =
      "<img src=./img/charmander.png alt=charmander-image> <h1>Charmander</h1> <h2>Chamas</h2> <h3>#004</h3>";
    pokemonAgua.innerHTML =
      "<img src=./img/squirtle.png alt=squirtle-image> <h1>Squirtle</h1> <h2>Água</h2> <h3>#007</h3>";
    pokemon = ["Charmander", "Bulbasaur", "Squirtle"];
  } else if (regiao.value === "Johto") {
    pokemonGrama.innerHTML =
      "<img src=./img/chikorita.png alt=chikorita-image> <h1>Chikorita</h1> <h2>Grama</h2> <h3>#152</h3>";
    pokemonFogo.innerHTML =
      "<img src=./img/cyndaquil.png alt=cyndaquil-image> <h1>Cyndaquil</h1> <h2>Chamas</h2> <h3>#155</h3>";
    pokemonAgua.innerHTML =
      "<img src=./img/totodile.png alt=totodile-image> <h1>Totodile</h1> <h2>Água</h2> <h3>#158</h3>";
    pokemon = ["Cyndaquil", "Totodile", "Chikorita"];
  } else if (regiao.value === "Unova") {
    pokemonGrama.innerHTML =
      "<img src=./img/snivy.png alt=snivy-image> <h1>Snivy</h1> <h2>Grama</h2> <h3>#495</h3>";
    pokemonFogo.innerHTML =
      "<img src=./img/tepig.png alt=tepig-image> <h1>Tepig</h1> <h2>Chamas</h2> <h3>#498</h3>";
    pokemonAgua.innerHTML =
      "<img src=./img/oshawott.png alt=oshawott-image> <h1>Oshawott</h1> <h2>Água</h2> <h3>#501</h3>";
    pokemon = ["Snivy", "Tepig", "Oshawott"];
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (arrayTrainers.includes(treinador.value)) {
    alert("Esse treinador já existe!");
  } else if(arrayTrainers.length === 3){
    alert('Atenção! Já atingimos o número máximo de treinadores neste região!');
    treinador.value = '';
  } else {
    alert(`Treinador ${treinador.value} Adicionado!`);
    arrayTrainers.push(treinador.value);
    numberTrainers += 1
    tableTrainer();
    treinador.value = ''
  }
});

function chooseTrainer() {
  buttonClick.addEventListener("click", function (e) {
    if(arrayTrainers.length === 0) {
      alert('Por favor, adicionar mais treinadores à tabela através do formulário.')
      location.reload();
    } else if(arrayTrainers.length === 1) {
      sortearPokemon();
      alert('Parabéns pelo pokémon! Que sua jornada comece!');
      location.reload();
    } else if(arrayTrainers.length === 2) {
      sortearPokemon();
      sortearPokemon();
      alert('Parabéns pelos pokémons! QUE A JORNADA COMECE!!');
      location.reload();
    } else {
      sortearPokemon();
      sortearPokemon();
      sortearPokemon();
        alert('Não sobrou mais nenhum pokemon! Que sua jornada comece!')
        location.reload();
    }
    
  });
}

chooseTrainer();








function tableTrainer() {
  let numeroLista = '<tr>'
  numeroLista += `<td>#${numberTrainers}</td>`
  numeroLista +=`<td>${treinador.value}</td>`
  numeroLista += '</tr>'
  tabelaTreinadores += numeroLista;

  document.querySelector('tbody').innerHTML = tabelaTreinadores
}

function removerArray() {
}

function sortearPokemon() {
  pokemon = pokemon.filter(e => e !== naoRepetiveis)
  arrayTrainers = arrayTrainers.filter(e => e !== naoRepetiveisTreinadores)
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    const randomPokemon = pokemon[randomIndex];
    const randomIndexTrainer = Math.floor(Math.random() * arrayTrainers.length);
    const randomTrainer = arrayTrainers[randomIndexTrainer];
     alert(`Parabéns Treinador ${randomTrainer}! O ${randomPokemon} te escolheu!`);
     naoRepetiveis = randomPokemon;
     naoRepetiveisTreinadores = randomTrainer;

    }

