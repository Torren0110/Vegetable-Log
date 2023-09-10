import React from 'react';
import './About.css';
import img from "../../assets/about_banner.png";


function About() {
 
  return (
<div className='main-about'>
<section className="about " id="about" >
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
        <br /> 
        Veggies provides the best platform for the user,farmers and traders to
        know the market price in the whole country and know the market value of
        a particular item which they want. Veggies provide the assurance of
        safety and provide a smooth working
        interface&nbsp;for&nbsp;the&nbsp;user.
      </p>
      {/* <a href="#" className="btn">Learn more</a> */}
    </div>
  </div>
</section>

<section className='sect' >
<div className="row">
  <h2 className="section-heading">Our Services</h2>
</div>
<div className="row">
  <div className="column" data-aos="fade-right">
    <div className="card">
      
      <h3>Online Vegetable Platform</h3>
      <p>
      These platforms allow users to buy and sell fresh vegetables online. Farmers and vendors can list their produce, and customers can browse and purchase a variety of vegetables from the comfort of their homes.
      </p>
      <span class="count">1</span>

    </div>
  </div>
  <div className="column" data-aos="fade-in">
    <div className="card secondcard">
      
      <h3>Home Delivery Service</h3>
      <p>
      Some platforms may provide home delivery services for fresh vegetables. Customers can place orders online, and the vegetables are delivered to their doorstep.</p>
      <span class="count">2</span>

    </div>
  </div>
  <div className="column" data-aos="fade-left">
    <div className="card thirdcard">
      
      <h3>Educational Resources</h3>
      <p>
      Online platforms related to vegetables could provide educational content about sustainable farming practices, nutritional benefits of different vegetables, and tips for gardening at home
      </p>
      <span class="count">3</span>

    </div>
  </div>
  <div className="column" data-aos="fade-right">
    <div className="card fourthcard">
     
      <h3>Farm-to-Table Services</h3>
      <p>
      Some services focus on connecting consumers directly with local farmers, promoting a farm-to-table concept. Customers can order vegetables that are sourced directly from nearby farms.
      </p>
      <span class="count">4</span>

    </div>
  </div>
  <div className="column" data-aos="fade-in">
    <div className="card fifthcard">
      
      <h3>Environmental Initiatives</h3>
      <p>
      Some platforms may emphasize sustainable and eco-friendly practices, such as promoting organic farming, reducing food waste, and supporting environmentally conscious choices
      </p>
      <span class="count">5</span>

    </div>
  </div>
  <div className="column" data-aos="fade-left">
    <div className="card sixthcard">
     
      <h3>Subscription Services</h3>
      <p>
      These services offer regular deliveries of fresh vegetables to customers who subscribe. Customers can receive a box of seasonal vegetables at scheduled intervals, which encourages healthy eating habits
      </p>
      <span class="count">6</span>

    </div>
  </div>
</div>
</section>
</div>
   
  );
}

export default About;





