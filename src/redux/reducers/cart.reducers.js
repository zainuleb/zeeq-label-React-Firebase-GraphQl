import cartActionTypes from "./cart.actions.types";
import { addItemToCart } from "../services/cart.utils";
const INITIAL_VALUE = {
  hidden: true,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
