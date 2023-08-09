import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { ShopContext } from '../../context/shop-context'
import CartItem from './CartItem';
import './Cart.css'

const Cart = () => {

    const {products, cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmt = getTotalCartAmount();
    const navigate = useNavigate()

  return (
    <div className='cart' >
      { totalAmt>0?
        <div>
        <h1>Your Cart Items</h1>
      </div>:
      <div></div>
      }
      <div className="cartItems">
        {products.map((prod)=>{
            if(cartItems[prod.id] !== 0 ){
                return <CartItem key={prod.id} data={prod} /> 
            }
        })}
      </div>
      {totalAmt>0 ?
      <div className="checkout">
        <p>Subtotal: Rs. {totalAmt}</p>
        <button onClick={()=>navigate('/')} >Continue Shopping</button>
        <button>Checkout</button>
      </div>:
      <div className='emptyCart' >
        <h1>Your Cart is Empty!!</h1>
        <button onClick={()=>navigate('/')} >Continue Shopping</button>
      </div>
      }
    </div>
  )
}

export default Cart
