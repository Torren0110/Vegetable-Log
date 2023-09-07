import React from 'react';
import './banner.css';
import side_image from "../../assets/side_image.avif"

const Banner = () => {
  return (
    <>
   
    <div className='banner'>
       <div className="content">
        <h2>FRESH AND ORGANIC</h2>
        <h3>VEGETABLE</h3>
        <h4>AT YOUR DOOR</h4>
           {/* <p>Veggies provides the best platform for the user,farmers and traders to know the market price in the whole country and know the market value of a particular item which they want</p> */}
        <button>Order Now</button>
        </div>
       </div>
    </>
  )
}

export default Banner