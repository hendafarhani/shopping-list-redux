

This project allows to iterate through shopping items and add them to my-basket list. 
Each time an item is selected it is added to the list and number of elements is incremented in my-basket component. 
In case the selected element is already added, my-basket component will increment the number of the item to tell the user how many articles he has selected of the same items.
Components don't communicate with each others. They get their states from the global store. Also they are able tp modify the store. 

Project structure:

src/app/pages: 
	Module for components displayed in the web page: 
		card-item: Builds shopping item.
		shopping-basket: Displays shopping items selected by user.
		shopping-list: Displays list of shopping items to select.
src/app/facades:
	Manages application’s store:
		my-basket/my-basket-list-facade.service.ts: Manages my-basket state.
		shopping/shopping-list-facade.service.ts: Manages shopping state. 
src/app/services:
	Services to for HTTP calls:
		shopping/shopping.service.ts: Service to retrieve shopping items.
src/app/store:
	Essential elements to apply redux design pattern:
		*store/actions: 
			→ my-basket/my-basket.action.ts: Contains load, create and update actions for my-basket state.
			→ shopping/shopping.action.ts: Contains load actions for shopping state.
		*store/effects: 
			→ shopping/shopping-effects.ts: Loads shopping items from database. 
		*store/reducers: 
			→ my-basket/my-basket-reducer.ts: Handle load, create and update actions for my-basket state.
			→ shopping/shopping-reducer.ts: Handle load action for shopping state.
		*store/selectors: 
			→ my-basket/my-basket.selector.ts: Contains selectors to load my-basket items, count them and count occurrences of a particular element in my-basket state.
			→ shopping/shopping.selector.ts: Contains selector to load shopping items.
		*store/state: 
			→ my-basket/my-basket-item.models.ts: My-basket class, to be stored in my-basket state.
			→ shopping/shopping-item.model.ts: Shopping class, to be stored in shopping state.
		*app-state.model.ts: Shopping state and my-basket state that constitute the store.

db.json: This project is using a fake backend to store and load shopping items from db.json.
	  For this purpose JSON serve is installed.
	  npm i json-server : command to install this server.
	  json-server –watch db.json : to start JSON server.

	 https://www.npmjs.com/package/json-server : For further information.

How to run the project ?
First run: npm i
Run JSON server: json-server –watch db.json 
Run Angular project: ng serve --open

talk about version of angular: 
Attach screen shot 
