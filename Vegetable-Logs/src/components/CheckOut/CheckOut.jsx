import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { ShopContext } from '../../context/shop-context';

const stripePromise = loadStripe("pk_test_51NhsFISIJlt9jqACQyXMGDEkVudKxQwTyhqSkLk8ZVRtCPJUy7hDUDNcGQId9HxQ0LzN9RyBqff4I3YjVtAMAzKU00jnyxRUKR");

const CheckOut = () => {

    const navigate = useNavigate()
    const { uid,user } = useContext(ShopContext);
    const location = useLocation()
    const amount = location.state.amt || 0
    const [paymentRes, setPaymentRes] = useState("");
    const handleClick = ()=>{
      navigate("/orders")
    }

    const handleClicK = ()=>{
      navigate("/cart")
    }

  if(paymentRes !== ""){
    return(
      <>
        {
          paymentRes === "success" ?
          <div>
            <p>Payment Successful</p>
            <div>
              <h5>Order Details: </h5>
              <p>Name: {user.name}</p>
              <p>Address: {user.address}</p>
              <p>Total Amount Paid: Rs. {amount}</p>
              <button onClick={handleClick} >Continue</button>
            </div>
          </div>
          :
          <div>
            <p>{paymentRes}</p>
            <button onClick={handleClicK} >Continue</button>
          </div>
        }
      </>
    )
  }

  return (
    <div className='payment'>
      <Elements stripe={stripePromise}>
              <CheckoutForm amount={amount} uid={uid} setPaymentRes={setPaymentRes} />
      </Elements>
    </div>
  )
}

export default CheckOut
