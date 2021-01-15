import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  LOAD_ITEM = '[SHOPPING] Load shopping',
  ADD_ITEM = '[SHOPPING] Add Item',
  DELETE_ITEM = '[SHOPPING] Delete Item',
  LOAD_ITEM_SUCCESS = '[SHOPPING] Load Item Success',
  LOAD_ITEM_FAILURE = '[SHOPPING] Load Item Failure',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
  DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item Failure',
}

export class LoadItemAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_ITEM.toString();
  
  constructor(public payload: any) {}
}

export class LoadItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_ITEM_SUCCESS.toString();

  constructor(public payload: Array<ShoppingItem>) {
    console.log(payload);
  }
}

export class LoadItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_ITEM_FAILURE.toString();

  constructor(public payload: Error) {}
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM.toString();

  constructor(public payload: ShoppingItem) {}
}

export class AddItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS.toString();

  constructor(public payload: ShoppingItem) {}
}

export class AddItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE.toString();

  constructor(public payload: Error) {}
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM.toString();
  constructor(public payload: string) {}
}

export class DeleteItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS.toString();

  constructor(public payload: ShoppingItem) {}
}

export class DeleteItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_FAILURE.toString();

  constructor(public payload: Error) {}
}

export type ShoppingAction =
  | LoadItemAction
  | LoadItemSuccessAction
  | LoadItemFailureAction
  | AddItemAction
  | AddItemSuccessAction
  | AddItemFailureAction
  | DeleteItemAction
  | DeleteItemSuccessAction
  | DeleteItemFailureAction;
