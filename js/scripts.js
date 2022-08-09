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


  function getAll () {
    return pokemonList;
  }
  function addListItem (pokemon) {
    let pokemonList = document.querySelector (".pokemon-list");
    let listpokemon = document.createElement ("li");
    let button = document.createElement ("button");
    button.innerText = pokemon.name;
    button.classList.add ("button-class");

    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function()
    {showDetails(pokemon)});

  }

  function showDetails (pokemon) { console.log(pokemon);
  }

  function add (pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  }
})();

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem (pokemon);

  /* 1.5
  document.write ('<p>');

  document.write("Pokemon name is " + pokemon.name + " and they are " + pokemon.height + " in height");

  if (pokemon.height>1) {
  document.write(", - Wow, that's big!");
}

document.write("</p>")*/
})
