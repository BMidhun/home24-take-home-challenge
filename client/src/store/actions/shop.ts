import { ADD_TO_CART } from "../constants/shop";

const addItemToCart =
  (dispatch: any) =>
  (cartItem: { name: string; price: number; id: string; qty: number }) => {
    dispatch({ type: ADD_TO_CART, payload: { ...cartItem } });
  };

const actions = { addItemToCart };

export default actions;
