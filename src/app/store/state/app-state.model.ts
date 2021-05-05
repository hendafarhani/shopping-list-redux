import { MyBasketState } from '../reducers/my-basket/my-basket-reducer';
import { ShoppingState } from '../reducers/shopping/shopping-reducer';

export interface AppState {

  readonly shopping: ShoppingState;
  readonly myBasket: MyBasketState;
  
}
