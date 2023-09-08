import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { ShopContext } from '../../context/shop-context';

const stripePromise = loadStripe("pk_test_51NhsFISIJlt9jqACQyXMGDEkVudKxQwTyhqSkLk8ZVRtCPJUy7hDUDNcGQId9HxQ0LzN9RyBqff4I3YjVtAMAzKU00jnyxRUKR");

const CheckOut = () => {
  
    const { uid } = useContext(ShopContext);
    const location = useLocation()
    const amount = location.state.amt || 0
    const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
    <div className='payment'>
      <Elements stripe={stripePromise}>
              <CheckoutForm amount={amount} uid={uid} setPaymentCompleted={setPaymentCompleted} />
      </Elements>
    </div>
  )
}

export default CheckOut
