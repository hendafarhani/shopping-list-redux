import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ShoppingService } from 'src/app/services/shopping.service';
import {
  AddItemAction,
  AddItemFailureAction,
  AddItemSuccessAction,
  DeleteItemAction,
  DeleteItemFailureAction,
  DeleteItemSuccessAction,
  LoadItemAction,
  LoadItemFailureAction,
  LoadItemSuccessAction,
  ShoppingActionTypes,
} from '../actions/shopping.action';
import { ShoppingItem } from '../models/shopping-item.model';

@Injectable()
export class ShoppingEffects {
  @Effect() loadShopping$ = this.actions$.pipe(
    ofType<LoadItemAction>(ShoppingActionTypes.LOAD_ITEM),
    mergeMap(() =>
      this.shoppingService.getShoppingItems().pipe(
        map((data: Array<ShoppingItem>) => {
          return new LoadItemSuccessAction(data);
        }),
        catchError((error) => of(new LoadItemFailureAction(error)))
      )
    )
  );

  @Effect() addShopping$ = this.actions$.pipe(
    ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
    mergeMap((data) =>
      this.shoppingService.addShoppingItem(data.payload).pipe(
        map((data: ShoppingItem) => {
          return new AddItemSuccessAction(data);
        }),
        catchError((error) => of(new AddItemFailureAction(error)))
      )
    )
  );

  @Effect() deleteShopping$ = this.actions$.pipe(
    ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
    mergeMap((data) =>
      this.shoppingService.deleteShoppingItem(data.payload).pipe(
        map((data: ShoppingItem) => {
          return new DeleteItemSuccessAction(data);
        }),
        catchError((error) => of(new DeleteItemFailureAction(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}
}
