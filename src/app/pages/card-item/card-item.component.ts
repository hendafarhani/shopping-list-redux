import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyBasketListFacadeService } from 'src/app/facades/my-basket/my-basket-list-facade.service';
import { MyBasketItem } from 'src/app/store/state/my-basket/my-basket-item.models';
import { ShoppingItem } from 'src/app/store/state/shopping/shopping-item.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input()
  public shoppingItem: ShoppingItem;

  @Output() 
  public itemAdded: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  public addItem(item: ShoppingItem){
    this.itemAdded.emit(item);
  }
}
