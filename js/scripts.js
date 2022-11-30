  let pokemonList = [
    
    { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison'] },
    { name: 'Charmander', height: 0.6, type: 'fire'},
    { name: 'Pikachu', height: 0.4, type: 'electric'},
    
];

for (let i= 0; i< pokemonList.length; i++) {
  if(pokemonList[i].height >= 0.5) {
      document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + ' wow, that is big!<br>')
  }
  else{ document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')<br>')}
}

