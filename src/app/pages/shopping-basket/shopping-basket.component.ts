import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MyBasketListFacadeService } from 'src/app/facades/my-basket/my-basket-list-facade.service';
import { AppState } from 'src/app/store/state/app-state.model';
import { MyBasketItem } from 'src/app/store/state/my-basket/my-basket-item.models';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css'],
})
export class ShoppingBasketComponent implements OnInit {
  
  @Input()
  myBasketItems: Observable<Array<MyBasketItem>>;
  
  itemNumbers$: Observable<Number>;

  display = false;

  constructor(private store: Store<AppState>, 
    private myBasketListFacade: MyBasketListFacadeService) {}

  ngOnInit(): void {
    this.itemNumbers$ = this.myBasketListFacade.countMyBasketItems();
  }


}
