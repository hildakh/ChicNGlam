export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if(existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
      ? {...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
      );
  }

  return [...cartItems, {...itemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const remainingItems = cartItems.filter(item => item.id !== itemToRemove.id);
  return remainingItems;
}