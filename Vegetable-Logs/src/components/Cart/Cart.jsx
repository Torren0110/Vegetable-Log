import React,{useContext} from 'react'
import { ShopContext } from '../../context/shop-context'
import CartItem from './CartItem';
import './Cart.css'

const Cart = () => {

    const {products, cartItems} = useContext(ShopContext);

  return (
    <div className='cart' >
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {products.map((prod)=>{
            if(cartItems[prod.id] !==0 ){
                return <CartItem data={prod} />
            }
        })}
      </div>
    </div>
  )
}

export default Cart
