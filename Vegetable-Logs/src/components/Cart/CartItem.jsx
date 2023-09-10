import React, {useContext, useState} from 'react'
import Logo from '../../assets/logo.jpeg'
import { ShopContext } from '../../context/shop-context'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
          toast.success('ITEM REMOVED !', {
            position: toast.POSITION.BOTTOM_CENTER,
            hideProgressBar: true,
            autoClose: 1000,
            pauseOnHover: false,
        });
      }
    }

    let imgSrc=Logo
    if(vegInfo.image && vegInfo.image.length){
        imgSrc=vegInfo.image
    }

  return (
    <div className='cartItem' >
      <ToastContainer/>
      <div className="image">
        <img src={imgSrc} alt="image" />
      </div>
        <div className="description">
            <p className='veg-name'><b>{vegInfo.name}</b></p>
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