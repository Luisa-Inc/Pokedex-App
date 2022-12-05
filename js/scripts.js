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

// create new 'addListItem' and add event listener 'button'


  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function(event) {
			showDetails(pokemon)
		})
	}
	function showDetails(pokemon) {
		console.log(pokemon);
    }

    
return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,

}

})();


let pokemon1 = 
    { name: 'Ivaysuer', height: 0.3, type: ['fire'] }; 
    
  pokemonRepository.add(pokemon1); 
    pokemonRepository.getAll().forEach(function(pokemon){ 
      pokemonRepository.addListItem(pokemon) 

      
  })
  