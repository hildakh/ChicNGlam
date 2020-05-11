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
  const existingCartItem = cartItems.find(item => item.id === itemToRemove.id);

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== itemToRemove.id);
  }

  return cartItems.map(item =>
    item.id === itemToRemove.id ? {...item, quantity: item.quantity-1}
    : item
    )
}

export const clearItemFromCart = (cartItems, itemToclear) => {
  const remainingItems = cartItems.filter(item => item.id !== itemToclear.id);
  return remainingItems;
}