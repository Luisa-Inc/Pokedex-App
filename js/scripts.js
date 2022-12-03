/*let pokemonList = [
    
  { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison'] },
  { name: 'Charmander', height: 0.6, type: ['fire']},
  { name: 'Pikachu', height: 0.4, type: ['electric']},

]*/


// pokemon list 'for each' function

pokemonList.forEach(function(pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.height + ' meters tall and of the following pokemon type: ' +  pokemon.type);
});


// IIFE 


let pokemonRepository = (function () {
  let pokemonList = [
      { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison'] },
      { name: 'Charmander', height: 0.6, type: ['fire'] },
      { name: 'Pikachu', height: 0.4, type: ['electric'] },
      
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) { 
    if (typeof pokemon === 'object' && 'name' in pokemon){
    pokemonList.push(pokemon);
  }
}

return {
  getAll: getAll,
  add: add,

}

})()