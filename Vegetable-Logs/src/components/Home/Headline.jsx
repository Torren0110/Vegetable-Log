import React from 'react';
import "./Headline.css";
import anchor from "../../assets/anchor.gif";


const Headline = () => {
  return (
    <>
    <div className="highlights">
      <h2 className="heading">Top <span>Highlights</span></h2>
    <section className="home" id="home">
  <div className="content" data-aos="fade-right">
  <img src={anchor} alt="" />
  </div>
  <div className="image" data-aos="fade-left" />
</section>
</div>
    </>
  )
}

export default Headline