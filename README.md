# myfirst-js-app
 
## Intro

This web application utilizes HTML, CSS, and JavaScript to display Pokémon information fetched from the [Pokémon API](https://pokeapi.co/). The application provides a list of Pokémon names with buttons that open a modal displaying additional details about each Pokémon.

### Features
- Displays a default Pokémon image using an <img> element.
- Fetches Pokémon data from the Pokémon API to populate the list and retrieve details.
- Creates a modal that showcases Pokémon details when a name button is clicked.
- Utilizes jQuery for modal interaction.
### Usage
Clone or download the repository from GitHub.
Open the index.html file in a web browser to view the application.
The page will display a list of Pokémon names.
Click on any Pokémon name to open a modal with more information. Or just check [deployed version](https://kamilaut.github.io/myfirst-js-app/).
### Code Overview
HTML: Defines the basic structure of the page.
CSS: Styles the page and modal for a visually appealing layout.
JavaScript: Handles API calls, data manipulation, and interaction.
Fetches a list of Pokémon names and details from the API.
Creates buttons for each Pokémon name and adds them to the list.
Opens a modal displaying the Pokémon's name, image, and height when a button is clicked.
### Initialization
Fetches a list of Pokémon using the provided API URL.
For each Pokémon in the list, adds it to the repository's internal storage.
### Functions
_add(newItem)_: Adds a Pokémon to the repository's list.


_getAll()_: Returns the list of Pokémon.


_addListItem(pokemon)_: Creates a list item with a button for a Pokémon's name.


_loadList()_: Fetches a list of Pokémon names and details from the API.


_loadDetails(item)_: Fetches additional details for a specific Pokémon.


_showModal(pokemon)_: Displays detailed information about a Pokémon in a modal.
### Dependencies
Pokémon API: Used to retrieve Pokémon data.
jQuery: Utilized for modal interactions.
### Getting Started
Clone the repository from GitHub: git clone <repository-url>
Open index.html in a web browser.
Explore the list of Pokémon names and click on a name to view details in a modal.

## Technology stack
The following technologies are used:
- HTML
- CSS
- JavaScript
