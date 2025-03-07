import { CartActionTypes } from './cart.types';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
  clearCart
} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
        //payload is not used here so we didn't include it in the cart actions
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }

    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      };

    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: clearCart()
      }

    default:
      return state
  }
}

export default cartReducer;