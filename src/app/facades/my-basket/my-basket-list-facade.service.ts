import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { CreateMyBasketItemSuccessAction, LoadMyBasketItemAction, UpdateMyBasketItemSuccessAction } from 'src/app/store/actions/my-basket/my-basket.action';
import { countMyBasketItems,  myBasketQuery } from 'src/app/store/selectors/my-basket/my-basket.selector';
import { AppState } from 'src/app/store/state/app-state.model';
import { MyBasketItem } from 'src/app/store/state/my-basket/my-basket-item.models';

@Injectable({
  providedIn: 'root',
})
export class MyBasketListFacadeService {
  constructor(private store: Store<AppState>) {}

  myBasketItems$ = this.store.pipe(select(myBasketQuery.loadMyBasketItems));
  
  countMyBasketItems() {
    return this.store.select(countMyBasketItems);
  }

  countOccurencesMyBasket(myBasket: MyBasketItem) {
    return this.store.pipe(select(myBasketQuery.countOccurences, myBasket));
  }

  getMyBasketItems() {
    return this.store.select(
      (store) => store.myBasket.list
    );
  }

  loadMyBasketItems(){
    this.store.dispatch(new LoadMyBasketItemAction(undefined));
  }

  addToMyBasketItems(myBasketItem: MyBasketItem){
    this.countOccurencesMyBasket(myBasketItem).pipe(take(1)).subscribe((data)=>{
      if(data.countOccurences > 0){
        let item = new MyBasketItem();    
        item.copy(data.myBasketItem);
        item.numberSelection = data.countOccurences;
        this.store.dispatch(new UpdateMyBasketItemSuccessAction(item));
      } else {
        this.store.dispatch(new CreateMyBasketItemSuccessAction(myBasketItem));
      }
    })
  }

  isLoading(){
    return this.store.select((store) => store.myBasket.loading);
  }

  getError(){
    return this.store.select((store) => store.myBasket.error)
  }
}
