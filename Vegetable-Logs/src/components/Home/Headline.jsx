import React from 'react';
import "./Headline.css";
import anchor from "../../assets/anchor.gif";
import Headlinebanner from './Headlinebanner';


const Headline = () => {
  return (
    <>
    <div className="highlights">
      <h2 className="heading">Top <span>Highlights</span></h2>
    <section className="home" id="home" data-aos="fade-in">
    <Headlinebanner/>
   
</section>
</div>
    </>
  )
}

export default Headline