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
  function add (pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
  }
})();


console.log(pokemonRepository.getAll());//[]
pokemonRepository.add({name: "Pikachu"});
