import { createSelector } from '@ngrx/store';
import { AppState } from '../../state/app-state.model';
import { MyBasketItem } from '../../state/my-basket/my-basket-item.models';


const selectMyBasket = (state: AppState) => state.myBasket;

export const loadMyBasketItems = createSelector(
  selectMyBasket,
  (myBasket) => myBasket.list
);

export const countMyBasketItems = createSelector(
  selectMyBasket,
  (myBasket) => myBasket.list.length
);

export const countOccurences = createSelector(
    selectMyBasket,
    (myBasketList, myBasketItem) => {
        let countOccurences = 0;
        myBasketList.list.forEach((element:MyBasketItem) => {
          if(element.id == myBasketItem.id){
            countOccurences = element.numberSelection +1;
          }
        });
    return {myBasketItem, countOccurences};
    ;}
  );


  export const myBasketQuery = {
    loadMyBasketItems,
    countMyBasketItems,
    countOccurences
  }