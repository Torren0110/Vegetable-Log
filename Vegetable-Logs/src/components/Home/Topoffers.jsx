import React from 'react';
import img1 from "../../assets/tomato.png";
import img2 from "../../assets/ladyfinger.jpeg";
import img3 from "../../assets/cauliflower.jpeg";
import img4 from "../../assets/brinjal.jpeg";
import img5 from "../../assets/potato.jpg";
import img6 from "../../assets/bottlegourd.jpeg";
import "./Topoffers.css";
import {Link} from"react-router-dom";

const Topoffers = () => {
  return (
    <>
     <div className="offer" id="offers">
    <h2 className="heading">
      Top <span>Offers</span>
    </h2>
    <div className="review">
      <div className="wrapper">
      <div className="box" data-aos="fade-right">
      <Link to="/prices">
          <div className="content">
            <div className="image">
              <img src={img1} alt="" />
            </div>
            <div className="info">
              <p className="name">Tomato</p>
              <p className="city"> <span>City:</span> Dehradun</p>
              <p className="price">
                Offer Price:  <span className="real">₹ 180</span> 
                <del> ₹ 200</del>  <span>(10% off)</span>
              </p>
            </div>
          </div>
</Link>
        </div>
        
        <div className="box" data-aos="fade-in">
        <Link to="/prices">
          <div className="content">
            <div className="image">
              <img src={img2} alt="" />
            </div>
            <div className="info">
              <p className="name">LadyFinger</p>
              <p className="city"> <span>City:</span> Dehradun</p>
              <p className="price">
                Offer Price:  <span className="real">₹ 180</span> 
                <del> ₹ 200</del>  <span>(10% off)</span>
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="box" data-aos="fade-left">
        <Link to="/prices">
          <div className="content">
            <div className="image">
              <img src={img3} alt="" />
            </div>
            <div className="info">
              <p className="name">Cauliflower</p>
              <p className="city"> <span>City:</span> Dehradun</p>
              <p className="price">
                Offer Price:  <span className="real">₹ 180</span> 
                <del> ₹ 200</del>  <span>(10% off)</span>
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="box" data-aos="fade-right">
        <Link to="/prices">
          <div className="content">
            <div className="image">
              <img src={img4} alt="" />
            </div>
            <div className="info">
              <p className="name">Brinjal</p>
              <p className="city"> <span>City:</span> Dehradun</p>
              <p className="price">
                Offer Price:  <span className="real">₹ 180</span> 
                <del> ₹ 200</del>  <span>(10% off)</span>
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="box" data-aos="fade-in">
        <Link to="/prices">
          <div className="content">
            <div className="image">
              <img src={img5} alt="" />
            </div>
            <div className="info">
              <p className="name">Potato</p>
              <p className="city"> <span>City:</span> Dehradun</p>
              <p className="price">
                Offer Price:  <span className="real">₹ 180</span> 
                <del> ₹ 200</del>  <span>(10% off)</span>
              </p>
            </div>
          </div>
          </Link>
        </div>
        <div className="box" data-aos="fade-left">
        <Link to="/prices">
          <div className="content">
            <div className="image">
              <img src={img6} alt="" />
            </div>
            <div className="info">
              <p className="name">Bottle Gourd</p>
              <p className="city"> <span>City:</span> Dehradun</p>
              <p className="price">
                Offer Price:  <span className="real">₹ 180</span> 
                <del> ₹ 200</del>  <span>(10% off)</span>
              </p>
            </div>
          </div>
          </Link>
        </div>
      </div>

      <Link to="/prices" className='view'>View All</Link>
    </div>
  </div>
    </>
  )
}

export default Topoffers