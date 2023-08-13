import React, {useContext, useState} from 'react'
import Logo from '../../assets/logo.jpeg'
import { ShopContext } from '../../context/shop-context'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton'

const CartItem = (props) => {

    const {qty, vegInfo} = props.data;
    const {addToCart} = useContext(ShopContext);
    const [quantity, setQuantity] = useState(qty);

    const handleQuantity = (param) => {
      console.log()
      if(param === 'decrease' && quantity >= 1){
          addToCart(vegInfo._id,-1)
          setQuantity(quantity -1);
      }
      else if(param ==='increase' && quantity < vegInfo.quantity){
          addToCart(vegInfo._id,1)
          setQuantity(quantity +1);
      }
      else if(param ==='empty' && quantity){
          const newQuant= quantity*-1;
          addToCart(vegInfo._id,newQuant)
          setQuantity(0);
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
        <IconButton className='closeIcon' onClick={()=>{handleQuantity("empty")}} >
            <CloseIcon />
        </IconButton>
    </div>
  )
}

export default CartItem