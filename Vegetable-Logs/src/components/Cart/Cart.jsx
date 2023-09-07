import React,{useContext, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { ShopContext } from '../../context/shop-context'
import CartItem from './CartItem';
import './Cart.css'

const Cart = () => {

    const { cart } = useContext(ShopContext);
    const [totalAmt,setTotalAmt] = useState(0);
    useEffect(()=>{
      let total=0;
      for(const item of cart){
          if(item.quantity > 0){
              let price = item.vegID.price;
              total += item.quantity * price; 
          }
      }
      setTotalAmt(total);
  },[cart]);
    const navigate = useNavigate()

    // {console.log(cart)}
    // {console.log(totalAmt)}
  return (
    <div className='cart' >
      { totalAmt>0?
        <div>
        <h1 id="head"> CART ITEMS</h1>
      </div>:
      <div></div>
      }
      <div className="cartItems">
        {cart.map((prod)=>{
            if(prod.quantity !== 0 ){
              const container={}
              container.qty=prod.quantity
              container.vegInfo=prod.vegID
                return <CartItem key={prod._id} data={container} /> 
        }
        })}
      </div>
      {totalAmt>0 ?
      <div className="checkout">
        <p>Subtotal: Rs. {totalAmt}</p>
        <button onClick={()=>navigate('/prices')} >Continue Shopping</button>
        <button onClick={()=>navigate('/checkout',{
          state:{
            amt:totalAmt,
          },
        })} >Checkout</button>
      </div>:
      <div className='emptyCart' >
        <h1>Your Cart is Empty!!</h1>
        <button onClick={()=>navigate('/prices')} >Continue Shopping</button>
      </div>
      }
    </div>
  )
}

export default Cart