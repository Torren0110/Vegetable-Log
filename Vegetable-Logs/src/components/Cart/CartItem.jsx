import React from 'react'
import Logo from '../../assets/logo.jpeg'

const CartItem = (props) => {

    const {id, name, image, price, qty} = props.data;

  return (
    <div className='cartItem' >
        <img src={Logo} alt="image" />
        <div className="description">
            <p><b>{name}</b></p>
            <p>Rs.{price}</p>
        </div>
    </div>
  )
}

export default CartItem
