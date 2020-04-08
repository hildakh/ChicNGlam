import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
  hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
      switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
          return {
            ...state,
            hidden: !state.hidden
            //payload is not used here so we didn't include it in the cart actions
      }
        default:
          return state
      }

}

export default cartReducer;