import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MyBasketListFacadeService } from './facades/my-basket/my-basket-list-facade.service';
import { ShoppingListFacadeService } from './facades/shopping/shopping-list-facade.service';
import { AppState } from './store/state/app-state.model';
import { MyBasketItem } from './store/state/my-basket/my-basket-item.models';
import { ShoppingItem } from './store/state/shopping/shopping-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-shopping-list';

  shoppingItems$: Observable<Array<ShoppingItem>>;
  myBasketItems$: Observable<Array<MyBasketItem>>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  constructor(
    private store: Store<AppState>,
    private shoppingListFacade: ShoppingListFacadeService,
    private myBasketListFacade: MyBasketListFacadeService
  ) {}

  ngOnInit(): void {
    this.shoppingItems$ = this.shoppingListFacade.getShoppingItems();
    this.myBasketItems$ = this.myBasketListFacade.getMyBasketItems();
    this.loading$ = this.shoppingListFacade.isLoading();
    this.error$ = this.shoppingListFacade.getError();
    this.shoppingListFacade.loadShoppingItems();
    this.myBasketListFacade.loadMyBasketItems();
  }
}
