import React from 'react';
import './About.css';
import img from "../../assets/about.gif"

function About() {
  return (
<div>
<section className="about " id="about">
  <h1 className="heading">
    <span>about</span> us </h1>
  <div className="row">
    <div className="image" data-aos="fade-right">
      <img src={img} alt="" />
    </div>
    <div className="content" data-aos="fade-left">
      <h3>Looking for Vegetable Stuff</h3>
      <p>
        Veggies provides the best platform for the user,farmers and traders to
        know the market price in the whole country and know the market value of
        a particular item which they want. Veggies provide the assurance of
        safety and provide a smooth working
        interface&nbsp;for&nbsp;the&nbsp;user.
        <br />
        Veggies helps the users to see the current price of fresh veggies in
        their state. Veggies help farmers to check for MSP so that hey can get
        the unbiased price , veggies also provide the information of seasonal
        plants so they can earn more benefit and also show demanding crops to
        the trader for the increase in supply of that particular veggies.
      </p>
      <a href="#" className="btn">Learn more</a>
    </div>
  </div>
</section>

<section className='sect'>
<div className="row">
  <h2 className="section-heading">Our Services</h2>
</div>
<div className="row">
  <div className="column">
    <div className="card">
      <div className="icon-wrapper">
        <i className="fas fa-hammer" />
      </div>
      <h3>Service Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        consequatur necessitatibus eaque.
      </p>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <div className="icon-wrapper">
        <i className="fas fa-brush" />
      </div>
      <h3>Service Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        consequatur necessitatibus eaque.
      </p>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <div className="icon-wrapper">
        <i className="fas fa-wrench" />
      </div>
      <h3>Service Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        consequatur necessitatibus eaque.
      </p>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <div className="icon-wrapper">
        <i className="fas fa-truck-pickup" />
      </div>
      <h3>Service Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        consequatur necessitatibus eaque.
      </p>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <div className="icon-wrapper">
        <i className="fas fa-broom" />
      </div>
      <h3>Service Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        consequatur necessitatibus eaque.
      </p>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <div className="icon-wrapper">
        <i className="fas fa-plug" />
      </div>
      <h3>Service Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        consequatur necessitatibus eaque.
      </p>
    </div>
  </div>
</div>
</section>
</div>
   
  );
}

export default About;





