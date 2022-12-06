/*// IIFE - 1.5


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

// create new 'addListItem' and add event listener 'button' - 1.6


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

// 1.7

  let pokemonRepository = (function () {
        let pokemonList = [];
        let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

        function add(pokemon) { 
            if (typeof pokemon === 'object' && 'name' in pokemon){
            pokemonList.push(pokemon);
          } else {
            console.log("pokemon is not correct");
          }
        }

        function getAll() {
            return pokemonList;
          }

        function addListItem(pokemon) {
            let pokemonList = document.querySelector('.pokemon-list');
    
            let listItem = document.createElement('li');
            
            let button = document.createElement('button');
            button.innerText = pokemon.name
            button.classList.add('button-class');
        
            listItem.appendChild(button);
            pokemonList.appendChild(listItem);
    
            button.addEventListener('click', function(event) {
                showDetails(pokemon)
            });
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

        function showDetails(pokemon) {
            pokemonRepository.loadDetails(pokemon).then(function () {
              console.log(pokemon);
            });
          }

        return {
          add: add,
          getAll: getAll,
          addListItem: addListItem,
          loadList: loadList,
          loadDetails: loadDetails,
          showDetails: showDetails,

        };
      })();
      
      pokemonRepository.loadList().then(function() {
        pokemonRepository.getAll().forEach(function(pokemon){
          pokemonRepository.addListItem(pokemon);
        });
      });*/


      // 1.8. Modal

      let pokemonRepository = (function () {
        let pokemonList = [];

        let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

        let pokemonListElement = document.querySelector('.pokemon-list');

        function add(pokemon) {
          if (
            typeof pokemon === 'object' &&
            'name' in pokemon
          ) {
            pokemonList.push(pokemon);
          } else {
            console.log('pokemon is not correct');
          }
        }
        function getAll() {
          return pokemonList;
        }
        function addListItem(pokemon) {
          let pokemonList = document.querySelector('.pokemon-list');
          let listpokemon = document.createElement('li');
          let button = document.createElement('button');
          button.innerText = pokemon.name;
          button.classList.add('button-class');
          listpokemon.appendChild(button);
          pokemonList.appendChild(listpokemon);
          button.addEventListener('click', function(event) {
            showDetails(pokemon);
          });
        };

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
            item.types = details.types.map((type) => type.type.name).join(',');
          }).catch(function (e) {
            console.error(e);
          });
        }

        function showDetails(item) {
          pokemonRepository.loadDetails(item).then(function () {
            showModal(item)


          });
        }

        function showModal(pokemon) {
              let modalContainer = document.querySelector('.modal-container');
              modalContainer.innerText = '';

              let modal = document.createElement('div');
              modal.classList.add('modal');

              let title = document.createElement('h1');
              title.innerText = pokemon.name;

              let pokemonImage = document.createElement('img');
              pokemonImage.src = pokemon.imageUrl;

              let pokemonHeight = document.createElement('p');
              pokemonHeight.innerText = 'Height: ' + pokemon.height;

              let pokemonTypes = document.createElement('p');
              pokemonTypes.innerText = 'Type: ' + pokemon.types;

              modal.appendChild(title);
              modal.appendChild(pokemonImage);
              modal.appendChild(pokemonHeight);
              modal.appendChild(pokemonTypes);
              modalContainer.appendChild(modal);

              modalContainer.addEventListener('click', (e) => {
                  let target = e.target;
                  if (target === modalContainer) {
                      hideModal();
                  }
              })

              modalContainer.classList.add('is-visible');
          }

          function hideModal() {
              let modalContainer = document.querySelector('.modal-container');
              modalContainer.classList.remove('is-visible');
          }

    window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('.modal-container');
        if(e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

          return {
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            loadList: loadList,
            loadDetails: loadDetails,
            showDetails: showDetails
          };
        })();


        pokemonRepository.loadList().then(function () {
          pokemonRepository.getAll().forEach(function (pokemon) {
            pokemonRepository.addListItem(pokemon);
          });
        });