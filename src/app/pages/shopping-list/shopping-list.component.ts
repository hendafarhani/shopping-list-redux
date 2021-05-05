import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/state/app-state.model';
import { ShoppingItem } from 'src/app/store/state/shopping/shopping-item.model';
import { MyBasketItem } from 'src/app/store/state/my-basket/my-basket-item.models';
import { MyBasketListFacadeService } from 'src/app/facades/my-basket/my-basket-list-facade.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  title = 'ngrx-shopping-list';
  @Input()
  shoppingItems: Observable<Array<ShoppingItem>>;

  @Input()
  loading$: Observable<boolean>;
  
  @Input()
  error$: Observable<Error>;
  
  newShoppingItem: ShoppingItem = new ShoppingItem();
  myBasketItems$: Observable<Array<MyBasketItem>>;

  constructor(
    private myBasketListFacade: MyBasketListFacadeService
    ) {}

  ngOnInit(): void {
    this.myBasketItems$ = this.myBasketListFacade.getMyBasketItems();
    this.error$ = this.myBasketListFacade.getError();
  }

  addItemToBasket(shoppingItem: ShoppingItem){
    this.myBasketListFacade.addToMyBasketItems(new MyBasketItem(shoppingItem));
  }

}
