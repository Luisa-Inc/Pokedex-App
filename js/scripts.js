let pokemonRepository = (function () {
	
  let pokemonList = [];
  let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add (pokemon) {
    if (typeof pokemon === 'object' && pokemon.name && pokemon.detailsUrl) {
      pokemonList.push(pokemon);
    } else {
      return `${pokemon} is not a Pokemon. Pokemon must be an object with the keys name, height, weight and type`;
    }
  }

  function getAll () {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    listItem.classList.add('group-list-item');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button', 'btn');
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#pokeModal');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');
 
    modalTitle.innerText = '';
    modalBody.innerText = '';

    let nameElement = document.createElement('h1');
    nameElement.innerText = pokemon.name;

    let heightElement = document.createElement('p');
    heightElement.innerText = 'Height: ' + pokemon.height;

    let weightElement = document.createElement('p');
    weightElement.innerText = 'Weight: ' + pokemon.weight;

    let typesElement = document.createElement('p');
    typesElement.innerText = 'Type: ' + pokemon.types;

    let abilitiesElement = document.createElement('p');
    abilitiesElement.innerText = 'Abilities: ' + pokemon.abilities;

    let imageElement = document.createElement('img');
    imageElement.classList.add('modal-image');
    imageElement.src = pokemon.imageUrl;

    modalTitle.appendChild(nameElement);
    modalBody.appendChild(heightElement);
    modalBody.appendChild(weightElement);
    modalBody.appendChild(typesElement);
    modalBody.append(abilitiesElement);
    modalBody.appendChild(imageElement);
  }

  function loadList() {
    showLoadingMessage();
    return fetch(apiURL).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });

      hideLoadingMessage();
    }).catch(function(e) {
      console.error(e);
      hideLoadingMessage();
    });
  }

  function loadDetails(item) {
    showLoadingMessage();
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types.map(function (item) {
        return item.type.name;
      });
      item.abilities = [];
      for (var i = 0; i < details.abilities.length; i++) {
        item.abilities.push(details.abilities[i].ability.name);
      
      }

      hideLoadingMessage();
    }).catch(function(e) {
      console.error(e);
      hideLoadingMessage();
    });
  }

  function showLoadingMessage() {
    let messages = document.querySelector('#messages');
    let message = document.createElement('span');
    message.id = 'loading';		
    message.innerText= 'Loading...';
    messages.appendChild(message);
  }

  function hideLoadingMessage() {
    let message = document.querySelector('#loading');
    message.parentElement.removeChild(message);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };

}) ();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(printDetails);
  function printDetails (pokemon) {
    pokemonRepository.addListItem(pokemon);
  }

  
});