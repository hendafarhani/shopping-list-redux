# NgrxShoppingList

This project is built with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6. <br />
It allows displaying shopping items that the user can add to my-basket list. <br />
In case the user selects the same item multiple times, the component which displays my-basket list will update the number of occurrences of this item. <br />
Both Components displaying shopping items and my-basket items don't communicate with each other instead they get their states from the global store. <br />

## Development server

First run `npm i`
Run JSON server: `json-server –watch db.json` 
Run Angular project: `ng serve --open`
The app will automatically navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Project structure

- ### src/app/pages: <br />
Module for components displayed in the web page: <br />
**card-item**: Builds shopping item. <br />
**shopping-basket**: 
Displays shopping items selected by user. <br />
**shopping-list**:
Displays list of shopping items to select. <br />
- ### src/app/facades: <br />
Manages application’s store: <br />
**my-basket/my-basket-list-facade.service.ts** :
Manages my-basket state. <br />
**shopping/shopping-list-facade.service.ts**: 
   Manages shopping state.  <br />
- ### src/app/services: <br />
Services for HTTP calls: <br />
**shopping/shopping.service.ts**:
Service to retrieve shopping items. <br />
- ### src/app/store: <br />
Essential elements to apply redux design pattern: <br />
#### store/actions:  <br />
- **my-basket/my-basket.action.ts**: 
Contains load, create and update actions for my-basket state. <br />
- **shopping/shopping.action.ts**: 
Contains load actions for shopping state. <br />
#### store/effects:  <br />
- **shopping/shopping-effects.ts**: 
Loads shopping items from database. <br />
#### store/reducers: <br />
- **my-basket/my-basket-reducer.ts**: 
Handle load, create and update actions for my-basket state.<br />
- **shopping/shopping-reducer.ts**: 
Handle load action for shopping state.<br />
#### store/selectors: <br />
- **my-basket/my-basket.selector.ts**: 
Contains selectors to load my-basket items, count them and count occurrences of a particular element in my-basket state. <br />
- **shopping/shopping.selector.ts**:
Contains selector to load shopping items. <br />
#### store/state: <br />
- **my-basket/my-basket-item.models.ts**: 
My-basket class, to be stored in my-basket state. <br />
- **shopping/shopping-item.model.ts**:
Shopping class, to be stored in shopping state. <br />
- **app-state.model.ts**: 
Shopping state and my-basket state that constitute the store. <br />

- ### db.json: 
This project is using a fake backend. It stores and loads shopping items from db.json. For this purpose JSON server is installed. <br />
`npm i json-server` : command to install this server. <br />
`json-server –watch db.json` : to start JSON server. <br />
https://www.npmjs.com/package/json-server : For further information.
