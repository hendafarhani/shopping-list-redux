import { MyBasketAction, MyBasketActionTypes } from '../../actions/my-basket/my-basket.action';
import { MyBasketItem } from '../../state/my-basket/my-basket-item.models';
  
  export interface MyBasketState {
    list: MyBasketItem[],
    loading: boolean,
    error: Error
  }
  
  const initialState: MyBasketState = {
    list: [],
    loading: false,
    error: undefined
  };
  
  export function MyBasketReducer(
    state: MyBasketState = initialState,
    action: MyBasketAction
  ) {
    switch (action.type) {
      case MyBasketActionTypes.LOAD_ITEM:
        return {
          ...state,
          loading: true,
        };
      case MyBasketActionTypes.LOAD_ITEM_SUCCESS:
        return {
          ...state,
          list: action.payload,
          loading: false,
        };
      case MyBasketActionTypes.LOAD_ITEM_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      case MyBasketActionTypes.CREATE_ITEM_SUCCESS:
        return {
          ...state,
          list: [...state.list, action.payload],
          loading: false,
        };
      case MyBasketActionTypes.UPDATE_ITEM_SUCCESS:
        return {
          ...state,
          list: state.list.map(item => item.id === action.payload.id ? action.payload : item),
          loading: false,
        };
      default:
        return state;
    }
  }
  