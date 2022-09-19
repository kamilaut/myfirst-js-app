let container = document.querySelector('#image-container');

let myImage = document.createElement('img');

myImage.src = 'https://cdn.icon-icons.com/icons2/851/PNG/128/pokemon_pokecenter_icon-icons.com_67517.png';

container.appendChild(myImage);

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  function add(newItem) {
    pokemonList.push(newItem);
  }

  function getAll () {
    return pokemonList;
  }

  function addListItem (pokemon) {
    let pokemonList = document.querySelector (".pokemonList");
    let listItem = document.createElement ("li");
    let button = document.createElement ("button");
    button.setAttribute ("data-toggle","modal");
    button.setAttribute ("data-target","#exampleModal");
    button.classList.add('btn', 'btn-primary');
    button.innerText = pokemon.name;
    button.classList.add ("name-button");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    button.addEventListener('click', function(){showDetails(pokemon);});
  }


  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
      console.log(pokemon);
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

  function showModal(pokemon) {
    console.log (pokemon);

    let modalBody = document.getElementsByClassName ("modal-body")[0];
    modalBody.innerHTML = "";

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    let imgElement = document.createElement('img');
    imgElement.classList.add('img-element');
    imgElement.src = pokemon.imageUrl;

    let contentElement = document.createElement('p');
    contentElement.innerText = 'Height: ' + pokemon.height + 'm';

    //let contentElement = document.createElement('p');
    //contentElement.innerText = pokemon.name;
    modalBody.append(titleElement);
    modalBody.append(imgElement);
    modalBody.append(contentElement);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
