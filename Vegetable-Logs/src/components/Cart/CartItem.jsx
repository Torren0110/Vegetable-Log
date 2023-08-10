import React, {useContext, useState} from 'react'
import Logo from '../../assets/logo.jpeg'
import { ShopContext } from '../../context/shop-context'

const CartItem = (props) => {

    const {qty, vegInfo} = props.data;
    const {addToCart} = useContext(ShopContext);
    const [quantity, setQuantity] = useState(qty);

    const handleQuantity = (param) => {
      console.log()
      if(param === 'decrease' && quantity > 1){
          addToCart(vegInfo._id,-1)
          setQuantity(quantity -1);
      }
      else if(param ==='increase' && quantity < 10){
          addToCart(vegInfo._id,1)
          setQuantity(quantity +1);
      }
  }

  return (
    <div className='cartItem' >
        <img src={Logo} alt="image" />
        <div className="description">
            <p><b>{vegInfo.name}</b></p>
            <p>Rs.{vegInfo.price}</p> 
            <div className='countHandler' >
              <button onClick={()=>{handleQuantity("decrease")}} >-</button>
              <span>{quantity}</span>
              <button onClick={()=>{handleQuantity("increase")}} >+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem