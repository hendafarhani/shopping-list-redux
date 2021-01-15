import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import {
  AddItemAction,
  DeleteItemAction,
  LoadItemAction,
} from './store/actions/shopping.action';
import { AppState } from './store/models/app-state.model';
import { ShoppingItem } from './store/models/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-shopping-list';
  shoppingItems: Observable<Array<ShoppingItem>>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;
  itemNumbers$: Observable<Number>;

  newShoppingItem: ShoppingItem = { id: uuid(), name: 'kljlkdjf' };

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    //We need to create a selector
    this.shoppingItems = this.store.select((store) => store.shopping.list);
    this.itemNumbers$ = this.store.select(
      (store) => store.shopping.list.length
    );
    this.loading$ = this.store.select((store) => store.shopping.loading);
    this.error$ = this.store.select((store) => store.shopping.error);
    this.store.dispatch(new LoadItemAction(undefined));
  }

  addItem() {
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
  }

  deleteItem(id: string) {}
}
