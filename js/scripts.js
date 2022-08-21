/* 1.6
let pokemonRepository = (function () {

let pokemonList = [
{ name: "Nidorino", height: 0.9,
type: 'poison' ,
skills: ['Poison-point, Hustle, Rivalry']},

{ name: "Wigglytuff",
height: 1.0, type: 'fairy' ,
skills: ['Cute-charm', 'Frisk']},

{ name: "Chansey",
height: 1.1,
type: 'normal' ,
skills: ['Natural-cure', 'Serene-grace', 'Healer']}
];

*/


let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }

  }
  function getAll () {
    return pokemonList;
  }

  function addListItem (pokemon) {
    let pokemonList = document.querySelector (".pokemonList");
    let listpokemon = document.createElement ("li");
    let button = document.createElement ("button");
    button.innerText = pokemon.name;
    button.classList.add ("button-class");

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function()
    {showDetails(pokemon)});

  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  }
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

  /* 1.5
  document.write ('<p>');

  document.write("Pokemon name is " + pokemon.name + " and they are " + pokemon.height + " in height");

  if (pokemon.height>1) {
  document.write(", - Wow, that's big!");
}

document.write("</p>")*/
})
