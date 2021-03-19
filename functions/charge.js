var stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async event => {
  const {body} = event
  const {token, cartAmount, line_items} = JSON.parse(event.body)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
   success_url: `${process.env.URL}/success.html`,
   cancel_url: process.env.URL,
   line_items: line_items,
   customer_email:token.email, 
  })
  const charge = await stripe.charges.create({
    amount: cartAmount * 100,
    currency: 'usd',
    source: token.id,
  })

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      chargeId: charge.id,
      email: token.email,
      publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
    }),
  };
};
