import React from 'react'

import {withRouter} from 'react-router-dom'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'


import CustomButton from '../custom-button/custom-button.component'
import CartItem  from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

// history & dispatch are destructured from  withRouter
const CartDropdown  = ({cartItems, history, dispatch}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
      {
        cartItems.length ?
        cartItems.map(cartItem => {
          return(<CartItem key={cartItem.id} item={cartItem}/>)
        }):
          <span className='empty-message'>Your cart is empty</span>
      }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})


// Evaluated inward out
export default withRouter(connect(mapStateToProps)(CartDropdown));
