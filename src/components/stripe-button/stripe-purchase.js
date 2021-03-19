import Stripe from 'stripe'

export const handleFormSubmission = async ({cartTotal, cartItems, card, client_ip, created, email, id, livemode, object, type, used, ...props}) => {
  const data = {
    cartItems,
    cartTotal,
    card,
    email,
    id,
    created,
    livemode,
    object,
    type,
    used,
  }

  const response = await fetch('/.netlify/functions/charge-copy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  const stripe = Stripe(response.publishableKey);
  const { error } = await stripe.redirectToCheckout({
    sessionId: response.sessionId,
  });

  if (error) {
    console.error(error);
  }
}
