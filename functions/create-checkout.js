
exports.handler = async event =>{
  const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);
  /*const {amount, token} = JSON.parse(event.body)
  console.log(amount)
  console.log(token)

  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    amount,
    token: token.id,
    //success_url: `${process.env.URL}/success`,
    //cancel_url: process.env.URL,
  })

    return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
    }),
  } */

  return {
    statusCode: 200,
    body: 'Hello World',
  }
};
