import React from 'react'

import logo from '../../assets/crown.svg'

//  Stripe Props
// https://github.com/azmenak/react-stripe-checkout#send-all-the-props
import StripeCheckout from 'react-stripe-checkout'

import './stripe-button.styles.scss'

const onToken = token => {
  console.log(token);
  alert('Payment Successful')
}
const StripeCheckoutButton  = ({price}) => {
  const priceForStripe = price * 100;
  return (
    <StripeCheckout label='Pay Now'
      name='Skincare Webstore'
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    />
  )
}

export default StripeCheckoutButton
