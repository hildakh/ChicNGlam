import { createSelector } from 'reselect';

const selectCart = state => state.cart;
//Using selectors to render cart dropdown and carticon component only when the state of the cartItems change and not every time the state changes
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
)

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedPrice, cartItem) => accumulatedPrice + cartItem.price * cartItem.quantity, 0)
)