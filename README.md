# Pokedex App

## Project description 

- A small pokemon web application with HTML, CSS, and JavaScript that loads data from an external [Pokémon API](https://pokeapi.co/) and enables the viewing of data points in detail. 
- In this case, the user sees a list of pokemons by name. When clicking on them, details for height, weight, types and abilities as well as an image is shown to the user.
- The code for the app can always be viewed in a repository on [GitHub](https://github.com/Luisa-Inc/Pokedex-App).
- The live app is accessible through the following [link](https://luisa-inc.github.io/Pokedex-App/).



## How to get the project running 

- Load data from an external source (API).
- View a list of items.
- On user action (by clicking on a list item), view details for that item.


## Project dependencies 

- JavaScript version: ES6
- Bootstrap version: v5.2.x
- ESLint rules:

```
{
    "env": {
        "es6": true,
        "browser": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "rules": {
        "quotes": ["error", "single"]
    }
}

```

- The app loads data from an external API, the [Pokémon API](https://pokeapi.co/).
- The app displays a list of items loaded from that API after the page is loaded.
- The app enables the viewing of more details for a given list item (a pokemon) on
demand, when clicking on a list item.
- The app has CSS styling.
- The JavaScript code is formatted according to ESLint rules.
    - The JavaScript code is manually formatted.
- The app uses additional complex UI pattern, a modal, for details or
touch interactions.
    - The app allows searching for items (pokemons).
- The app does not throw any errors when being used.
- The app works in Chrome, Firefox, Safari, Edge, and Internet Explorer 11.
