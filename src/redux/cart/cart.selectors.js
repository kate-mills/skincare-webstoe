import { createSelector } from 'reselect'

// How much cart data do I need

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (sum, item) => {
      return sum + item.quantity;
    } , 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (sum, item)=> {
      return sum + (item.quantity * item.price)
    }, 0)
)
