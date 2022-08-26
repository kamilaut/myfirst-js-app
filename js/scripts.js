let container = document.querySelector('#image-container');

let myImage = document.createElement('img');

myImage.src = 'https://cdn.icon-icons.com/icons2/851/PNG/128/pokemon_pokecenter_icon-icons.com_67517.png';

container.appendChild(myImage);

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let loadingMessageEl = document.getElementById('loading-message');
  let modalContainer = document.querySelector('#modal-container');

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }

  }
  function getAll () {
    return pokemonList;
  };

  function addListItem (pokemon) {
    let pokemonList = document.querySelector (".pokemonList");
    let listpokemon = document.createElement ("li");
    let button = document.createElement ("button");
    button.innerText = pokemon.name;
    button.classList.add ("button-class");

    listItem.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function()
    {showDetails(pokemon)});

  }

  function loadList() {
    showLoadingMessage();
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
      item.types = details.types.map(function (typeObject) {
        return typeObject.type.name
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  let pokemonRepository = (function() {

    function showModal(title,text) {
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');

      // adding the new modal content
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);

      let titleElement = document.createElement('h1');
      titleElement.innerText = title;

      let contentElement = document.createElement('p');
      contentElement.innerText = text;

      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible');
    }

    let dialogPromiseReject; // This can be set later, by showDialog

    function hideModal() {
      let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.remove('is-visible');

      if (dialogPromiseReject) {
        dialogPromiseReject();
        dialogPromiseReject = null;
      }
    }

    function showDialog(title, text) {
      showModal(title, text);

      // We have defined modalContainer here
      let modalContainer = document.querySelector('#modal-container');

      // We want to add a confirm and cancel button to the modal
      let modal = modalContainer.querySelector('.modal');

      let confirmButton = document.createElement('button');
      confirmButton.classList.add('modal-confirm');
      confirmButton.innerText = 'Confirm';

      let cancelButton = document.createElement('button');
      cancelButton.classList.add('modal-cancel');
      cancelButton.innerText = 'Cancel';

      modal.appendChild(confirmButton);
      modal.appendChild(cancelButton);

      // We want to focus the confirmButton so that the user can simply press Enter
      confirmButton.focus();

      // Return a promise that resolves when confirmed, else rejects
      return new Promise((resolve, reject) => {
        cancelButton.addEventListener('click', hideModal);
        confirmButton.addEventListener('click', () => {
          dialogPromiseReject = null; // Reset this
          hideModal();
          resolve();
        });
        // This can be used to reject from other functions
        dialogPromiseReject = reject;
      });
    }

    document.querySelector('#show-dialog').addEventListener('click', () => {
      showDialog('Confirm action', 'Are you sure you want to do this?').then(function() {
        alert('confirmed!');
      }, () => {
        alert('not confirmed');
      });
    });

    window.addEventListener('keydown', (e) => {
      let modalContainer = document.querySelector('#modal-container');
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });

    let modalContainer = document.querySelector('#modal-container');

    modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });

    document.querySelector('#show-modal').addEventListener('click', () => {
      showModal('Modal title', 'Modal text');
    });

  })();

//   return {
//     getAll: getAll,
//     add: add,
//     addListItem: addListItem,
//     loadList: loadList,
//     loadDetails: loadDetails,
//     showDetails: showDetails
//   }
// })();
//
// pokemonRepository.loadList().then(function () {
//   pokemonRepository.getAll().forEach(function (pokemon) {
//     pokemonRepository.addListItem(pokemon);
//   });
});

  /* 1.5
  document.write ('<p>');

  document.write("Pokemon name is " + pokemon.name + " and they are " + pokemon.height + " in height");

  if (pokemon.height>1) {
  document.write(", - Wow, that's big!");
}

document.write("</p>")*/

/* 1.6
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

*/
