import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app-state.model';
import { LoadItemAction } from '../../store/actions/shopping/shopping.action';
import { countShoppingItems } from '../../store/selectors/shopping/shopping.selector';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListFacadeService {
  constructor(private store: Store<AppState>) {}

  countShoppingItems() {
    return this.store.select(countShoppingItems);
  }

  getShoppingItems() {
    return this.store.select(
      (store) => store.shopping.list
    );
  }

  loadShoppingItems(){
    this.store.dispatch(new LoadItemAction(undefined));
  }

  isLoading(){
    return this.store.select((store) => store.shopping.loading);
  }

  getError(){
    return this.store.select((store) => store.shopping.error)
  }
}
