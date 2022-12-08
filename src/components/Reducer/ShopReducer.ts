import { ShopAction, ShopActionType } from "./actions";
import { ShopState } from "./state";

export const shopReducer = (state: ShopState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionType.ADD_TO_CART:
      return {
        ...state,
        products: action.payload,
      };

    case ShopActionType.REMOVE_FROM_CART:
      return {
        ...state,
        products: action.payload,
      };

    case ShopActionType.UPDATE_PRICE:
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};