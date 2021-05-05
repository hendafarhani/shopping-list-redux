import { createSelector } from '@ngrx/store';

export const countShoppingItems = createSelector(
  (store) => store['shopping'],
  (shopping) => shopping.list.length
);
