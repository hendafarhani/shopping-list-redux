import { Action } from '@ngrx/store';
import { MyBasketItem } from '../../state/my-basket/my-basket-item.models';

export enum MyBasketActionTypes {
  ADD_ITEM = '[MYBASKET] Add Item',
  ADD_ITEM_FAILURE = '[MYBASKET] Add Item Failure',
  LOAD_ITEM = '[MYBASKET] Load shopping',
  LOAD_ITEM_SUCCESS = '[MYBASKET] Load Item Success',
  LOAD_ITEM_FAILURE = '[MYBASKET] Load Item Failure',
  CREATE_ITEM_SUCCESS = '[MYBASKET] Create Item Success',
  UPDATE_ITEM_SUCCESS = '[MYBASKET] Update Item Success',

}

export class LoadMyBasketItemAction implements Action {
  readonly type = MyBasketActionTypes.LOAD_ITEM.toString();
  
  constructor(public payload: any) {}
}

export class LoadMyBasketItemSuccessAction implements Action {
  readonly type = MyBasketActionTypes.LOAD_ITEM_SUCCESS.toString();

  constructor(public payload: Array<MyBasketItem>) {
  }
}

export class LoadMyBasketItemFailureAction implements Action {
  readonly type = MyBasketActionTypes.LOAD_ITEM_FAILURE.toString();

  constructor(public payload: Error) {}
}

export class AddMyBasketItemAction implements Action {
  readonly type = MyBasketActionTypes.ADD_ITEM.toString();

  constructor(public payload: MyBasketItem) {}
}

export class UpdateMyBasketItemSuccessAction implements Action {
  readonly type = MyBasketActionTypes.UPDATE_ITEM_SUCCESS.toString();
  constructor(public payload: MyBasketItem) {}
}

export class CreateMyBasketItemSuccessAction implements Action {
  readonly type = MyBasketActionTypes.CREATE_ITEM_SUCCESS.toString();
  constructor(public payload: MyBasketItem) {}
}


export type MyBasketAction =
  | LoadMyBasketItemAction
  | LoadMyBasketItemSuccessAction
  | LoadMyBasketItemFailureAction
  | AddMyBasketItemAction
  | CreateMyBasketItemSuccessAction
  | UpdateMyBasketItemSuccessAction
  