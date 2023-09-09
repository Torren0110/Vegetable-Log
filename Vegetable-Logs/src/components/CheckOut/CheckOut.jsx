import { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { ShopContext } from '../../context/shop-context';
import {TiTick} from "react-icons/ti"
import {ImCross} from "react-icons/im"

const stripePromise = loadStripe("pk_test_51NhsFISIJlt9jqACQyXMGDEkVudKxQwTyhqSkLk8ZVRtCPJUy7hDUDNcGQId9HxQ0LzN9RyBqff4I3YjVtAMAzKU00jnyxRUKR");

const CheckOut = () => {

    const navigate = useNavigate()
    const { uid,user } = useContext(ShopContext);
    const location = useLocation()
    const amount = location.state.amt || 0
    const [paymentRes, setPaymentRes] = useState("");

    console.log(user)
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
          <div className='paymentsuccess'>
            <div className="success">
              <p className='successtick'><TiTick className='tick'/></p>

              <p className='successmsg'>Payment Successful</p>
              <div className="field">
              <div className="que">
              <p>Payment Type </p>
              <p>Name  </p>
              <p>Address </p>
              <p>Total Amount Paid </p>
              </div>
              <div className="ans">
              <p>Card </p>
              <p>{user.username} </p>
              <p>{user.address}</p>
              <p>Rs. {amount} </p>
              </div>
              </div>
              <button onClick={handleClick} >Continue</button>
            </div>
          </div>
          :
          <div className='false'>
            <div>
              <p className='falsetick'><ImCross/></p>
            
            <p className='falsemsg'>{paymentRes}</p>
            <button onClick={handleClicK} >Continue</button>
            </div>
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
