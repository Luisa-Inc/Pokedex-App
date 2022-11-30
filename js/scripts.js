  //create an array 'pokemonList' that shows at least 3 objects with names, heights and types


  let pokemonList = [
    
    { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison'] },
    { name: 'Charmander', height: 0.6, type: 'fire'},
    { name: 'Pikachu', height: 0.4, type: 'electric'},
    
];

//create 'for loop' that prints out "wow that is big!" if the pokemon is bigger than or equals 0.7 meter


for (let i= 0; i< pokemonList.length; i++) {
  if(pokemonList[i].height >= 0.7) {
      document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + ' Wow, that is big!<br>')
  }
  else{ document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')<br>')}
}

