import { Product } from "../../models/Product";

export enum ShopActionType {
    ADD_TO_CART = 'add-to-cart',
    REMOVE_FROM_CART = 'remove-from-cart',
    UPDATE_PRICE = 'update-price',
  }
  
  export type ShopAction = {
    type: ShopActionType;
    payload: any;
  };
  
  export const add = (product: Product): ShopAction => ({
    type: ShopActionType.ADD_TO_CART,
    payload: product,
  });
  
  export const remove = (product: Product): ShopAction => ({
    type: ShopActionType.REMOVE_FROM_CART,
    payload: product,
  });

  export const update = (total: number): ShopAction => ({
    type: ShopActionType.UPDATE_PRICE,
    payload: total,
  });