let pokemonList = [
  { name: "Nidorino", height: 0.9, type: 'poison' , skills: ['Poison-point, Hustle, Rivalry']},
  { name: "Wigglytuff", height: 1.0, type: 'fairy' , skills: ['Cute-charm', 'Frisk']},
  { name: "Chansey", height: 1.1, type: 'normal' , skills: ['Natural-cure', 'Serene-grace', 'Healer']}
];

let pokemonList = [
  { name: "Nidorino", height: 0.9, type: 'poison' , skills: ['Poison-point, Hustle, Rivalry']},
  { name: "Wigglytuff", height: 1.0, type: 'fairy' , skills: ['Cute-charm', 'Frisk']},
  { name: "Chansey", height: 1.1, type: 'normal' , skills: ['Natural-cure', 'Serene-grace', 'Healer']}
];


function myLoopFunction(pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.height + pokemon.type );
}
pokemonList.forEach(myLoopFunction);
