import {
  ShoppingAction, ShoppingActionTypes,
} from '../../actions/shopping/shopping.action';
import { ShoppingItem } from '../../state/shopping/shopping-item.model';

export interface ShoppingState {
  list: ShoppingItem[],
  loading: boolean,
  error: Error
}

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined
};

export function ShoppingReducer(
  state: ShoppingState = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.LOAD_ITEM:
      return {
        ...state,
        loading: true,
      };
    case ShoppingActionTypes.LOAD_ITEM_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case ShoppingActionTypes.LOAD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
