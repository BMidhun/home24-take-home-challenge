import { cartItem, ShopState } from "../../types/types";
import { ADD_TO_CART } from "../constants/shop";

const initialState: ShopState = {
  cartItems: [],
  totalAmount: 0,
  totalQty: 0,
};

function shopReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case ADD_TO_CART: {
      const itemToAdd = action.payload;
      const cartItems = [...state.cartItems];
      let totalQty = 0;
      let totalAmount = 0;

      const item = cartItems.find((item: cartItem) => item.id === itemToAdd.id);

      if (item) item.qty++;
      else {
        itemToAdd.qty++;
        cartItems.push(itemToAdd);
      }

      cartItems.forEach((item) => {
        totalQty += item.qty;
      });

      cartItems.forEach((item) => {
        totalAmount += item.price * item.qty;
      });

      return { ...state, cartItems, totalAmount, totalQty };
    }

    default:
      return state;
  }
}

export default shopReducer;

export { initialState };
