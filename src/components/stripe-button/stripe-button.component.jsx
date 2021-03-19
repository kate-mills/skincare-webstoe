/* eslint-disable no-whitespace-before-property */
import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/crown.png'

import './stripe-button.styles.scss'
 
export default class TakeMoney extends React.Component {
  onToken = (token) => {
      const data_props = {
        token: token,
        cartAmount: this.props.cartTotal,
        line_items: this.props.cartItems.map(item => {
          return {
            name: item.name,
            description: item.description,
            images: [item.imageUrl],
            amount: item.price * 100,
            currency: 'usd',
            quantity: item.quantity
          }
        }),
        source: token.id
      }

    fetch('/.netlify/functions/charge', {
      method: 'POST',
      body: JSON.stringify(data_props),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
 
  render() {
    console.log('props', this.props)
    return (
      <StripeCheckout
        name="Skincare Webstore"
        panelLabel="Buy Now"
        billingAddress
        shippingAddress
        image={logo}
        currency="USD"
        token={this.onToken}
        description={`Your total is ${this.props.cartTotal}`}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      />
    )
  }
}
