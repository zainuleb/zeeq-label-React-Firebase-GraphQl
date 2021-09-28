import cartActionTypes from "./cart.actions.types";
const INITIAL_VALUE = {
  hidden: true,
};

export const cartReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};
