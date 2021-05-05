import { Action } from '@ngrx/store';
import { ShoppingItem } from '../../state/shopping/shopping-item.model';

export enum ShoppingActionTypes {
  LOAD_ITEM = '[SHOPPING] Load shopping',
  LOAD_ITEM_SUCCESS = '[SHOPPING] Load Item Success',
  LOAD_ITEM_FAILURE = '[SHOPPING] Load Item Failure',
}

export class LoadItemAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_ITEM.toString();
  
  constructor(public payload: any) {}
}

export class LoadItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_ITEM_SUCCESS.toString();

  constructor(public payload: Array<ShoppingItem>) {
  }
}

export class LoadItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_ITEM_FAILURE.toString();

  constructor(public payload: Error) {}
}

export type ShoppingAction =
  | LoadItemAction
  | LoadItemSuccessAction
  | LoadItemFailureAction;