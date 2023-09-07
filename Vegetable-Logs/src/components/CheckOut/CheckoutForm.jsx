import React, { useState } from 'react';
import {
  useStripe, useElements,
  CardElement, CardExpiryElement, CardCvcElement
} from '@stripe/react-stripe-js';
import axios from "axios"
import './Checkout.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      lineHeight: "27px",
      color: "#212529",
      fontSize: "1.1rem",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function CheckoutForm(props) {

  const { removeAll,cart } = useContext(ShopContext)
  const navigate = useNavigate()
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);

    const paymentMethodObj = {
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name,
        email
      },
    };
    const {error, paymentMethod} = await stripe.createPaymentMethod(paymentMethodObj);
    console.log(paymentMethod)
    
    if(!error){
      const {id} = paymentMethod
      const data={
        amount:props.amount,
        id,
        uid: props.uid,
        cart,
      }
      console.log("data:",data)
      const response = await axios.post("http://localhost:3000/api/carts/pay", data)
      if(response.data.success){
        console.log(response.data.message)
        // setSuccess(true)
        setLoading(false)
        toast.success('Payment successfull !', {
          position: toast.POSITION.BOTTOM_CENTER,
          hideProgressBar: true,
          autoClose: 1000,
          pauseOnHover: false,
        });
        removeAll()
        await delay(3000); 
        navigate("/")
      }
    }
    else{
      console.log(error.message)
    }

    // stripePaymentMethodHandler({
    //   result: paymentMethodResult,
    //   amount: props.amount
    // }, handleResponse);
  };

  // callback method to handle the response
  // const handleResponse = response => {
  //   setLoading(false);
  //   if (response.error) {
  //     setErrorMsg(typeof response.error === 'string' ? response.error : response.error.message);
  //     return;
  //   }
  //   props.setPaymentCompleted(response.success ? true : false);
  // };

  return (
      <div className='container'>
        <ToastContainer/>
      <h4> Pay with card      </h4>
      <form onSubmit={handleSubmit}>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-name">Name on card</label>
            <input
              id="cc-name"
              type="text"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-email">Email</label>
            <input
              id="cc-email"
              type="text"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-3">
            <label htmlFor="cc-number">Card Number</label>
            <CardElement
              id="cc-number"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
        </div>

        {/* <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="expiry">Expiry Date</label>
            <CardExpiryElement
              id="expiry"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cvc">CVC</label>
            <CardCvcElement
              id="cvc"
              className="form-control"
              options={CARD_ELEMENT_OPTIONS}
            />
          </div>
        </div> */}

        <hr className="mb-4" />
        <button className="btn btn-dark w-100" type="submit" disabled={loading}>
          {loading ? <div className="spinner-border spinner-border-sm text-light" role="status"></div> : `PAY ₹${props.amount}`}
        </button>
        {/* {success && <div className="text-danger mt-2">{success}</div>} */}
      </form>
      </div>
  );
}