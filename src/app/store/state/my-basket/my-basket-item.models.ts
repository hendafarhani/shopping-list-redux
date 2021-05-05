import { ShoppingItem } from '../shopping/shopping-item.model';

export class MyBasketItem {
    id: string;
    name: string;
    numberSelection: number
  
    constructor(shoppingItem?: ShoppingItem){
        if(shoppingItem != undefined){
            this.id = shoppingItem.id;
            this.name = shoppingItem.name;
            this.numberSelection  = 1;
        } 
    }

    public copy(myBasketItem: MyBasketItem){
        this.id = myBasketItem.id;
        this.name = myBasketItem.name;
        this.numberSelection = myBasketItem.numberSelection;
    }

}
  