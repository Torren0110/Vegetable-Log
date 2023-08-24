import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe("pk_test_51NhsFISIJlt9jqACQyXMGDEkVudKxQwTyhqSkLk8ZVRtCPJUy7hDUDNcGQId9HxQ0LzN9RyBqff4I3YjVtAMAzKU00jnyxRUKR");

const CheckOut = () => {

    const location = useLocation()
    const amount = location.state.amt || 0
    const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
    <div>
      <Elements stripe={stripePromise}>
              <CheckoutForm amount={amount} setPaymentCompleted={setPaymentCompleted} />
      </Elements>
    </div>
  )
}

export default CheckOut
