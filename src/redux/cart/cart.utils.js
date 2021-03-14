export const addItemToCart = (cartItems, cartItemToAdd) => {

  const existingCartItem = cartItems.find(item => {
    return item.id === cartItemToAdd.id
  });

  if(existingCartItem){
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem 
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};


export const removeItemFromCart = (cartItems, cartItemToRemove) => {

  const existingCartItem = cartItems.find(item => {
    return item.id === cartItemToRemove.id
  })

  if(existingCartItem.quantity === 1){
    return cartItems.filter( cartItem =>  cartItem.id !== cartItemToRemove.id )
  }
  else{
    return cartItems.map( item => {
      if(item.id === existingCartItem.id){
        return {quantity:  item.quantity - 1, name: item.name, price: item.price, imageUrl: item.imageUrl, id: item.id }
      }
      return (item.id === existingCartItem.id) ? { quantity: item.quantity-1, ...item } : item
    })
  }
};
