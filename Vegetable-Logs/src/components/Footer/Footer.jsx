import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
  <div className="box-container">
    <div className="box" data-aos="fade-right">
      <h3>quick links</h3>
      <Link className='link' to="/home"><i className="fas fa-chevron-right" /> Home</Link>
      <Link className='link' to="/"><i className="fas fa-chevron-right" /> About</Link>
      <Link className='link' to="/"><i className="fas fa-chevron-right" /> Prices</Link>
      <Link className='link' to="/"><i className="fas fa-chevron-right" /> Review</Link>
      <Link className='link' to="/"><i className="fas fa-chevron-right" /> Contact</Link>
     
    </div>
    <div className="box" data-aos="fade-right">
      <h3>Top Cities</h3>
      <Link className='link' to="/" ><i className="fas fa-chevron-right" /> Dehradun</Link>
      <Link className='link' to="/" ><i className="fas fa-chevron-right" /> Delhi</Link>
      <Link className='link' to="/" ><i className="fas fa-chevron-right" /> Mumbai</Link>
      <Link className='link' to="/" ><i className="fas fa-chevron-right" /> Bangalore</Link>
      <Link className='link' to="/" ><i className="fas fa-chevron-right" /> Pune</Link>

     
    </div>
    <div className="box" data-aos="fade-left">
      <h3>follow us</h3>
      <Link className='link' to="/" ><i className="fab fa-facebook-f" /> facebook</Link>
      <Link className='link' to="/" ><i className="fab fa-twitter" /> twitter</Link>
      <Link className='link' to="/" ><i className="fab fa-linkedin" /> linkedin</Link>
      <Link className='link' to="/" ><i className="fab fa-instagram" /> Instagram</Link>
      <Link className='link' to="/" ><i className="fab fa-pinterest" /> Pinterest</Link>
     
    </div>
    <div className="box" id="contact">
      <h3>Contact Us</h3>
      <input type="text" name="" placeholder="Your name..." id="name" /> <br />
      <input type="email" name="" placeholder="Your email..." id="email" /> <br />
      <input type="text" name="" placeholder="Enter your message here..." id="message" />
      <br />
      <input type="submit" defaultValue="Submit" />
    </div>
  </div>
  <div className="credit">
    Created by | <span>Team Dev</span> | all rights reserved
  </div>
</footer>

  )
}

export default Footer