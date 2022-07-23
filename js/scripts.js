let pokemonList = [
  { name: "Nidorino", height: 0.9, type: 'poison' , skills: ['Poison-point, Hustle, Rivalry']},
  { name: "Wigglytuff", height: 1.0, type: 'fairy' , skills: ['Cute-charm', 'Frisk']},
  { name: "Chansey", height: 1.1, type: 'normal' , skills: ['Natural-cure', 'Serene-grace', 'Healer']}
];

for (let i = 0; i<pokemonList.length; i++) {

  document.write("<p>" + pokemonList[i].name + ' (height:' + pokemonList[i].height +  ')');

  //writes special text for pokemons with a height over 1
  if (pokemonList[i].height>1) {
    document.write(" - Wow, that\'s big!"</p>")
  }

  document.write("</p>")
}
