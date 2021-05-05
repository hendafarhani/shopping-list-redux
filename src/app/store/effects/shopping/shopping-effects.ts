import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ShoppingService } from 'src/app/services/shopping/shopping.service';
import {
  LoadItemAction,
  LoadItemFailureAction,
  LoadItemSuccessAction,
  ShoppingActionTypes,
} from '../../actions/shopping/shopping.action';
import { ShoppingItem } from '../../state/shopping/shopping-item.model';

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

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}
}
