import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";
import {BsApple} from "react-icons/bs";
import {FaGooglePlay} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
  <div className="box-container">
    <div className="box" >
      <h3>quick links</h3>
      <Link className='link' to="/"><i className="fas fa-chevron-right" /> Home</Link>
      <Link className='link' to="/about"><i className="fas fa-chevron-right" /> About</Link>
      <Link className='link' to="/prices"><i className="fas fa-chevron-right" /> Items</Link>
      <Link className='link' to="/predict"><i className="fas fa-chevron-right" /> Predictions</Link>
      <Link className='link' to="/"><i className="fas fa-chevron-right" /> Contact</Link>
     
    </div>
    <div className="box" >
      <h3>Top Cities</h3>
      <Link className='link' to="/" ><i className="fas fa-chevron-right" /> Dehradun</Link>
      <Link className='link' to="/" ><i className="fas fa-chevron-right" /> Delhi</Link>
      <Link className='link' to="/" ><i className="fas fa-chevron-right" /> Mumbai</Link>
      <Link className='link' to="/" ><i className="fas fa-chevron-right" /> Bangalore</Link>
      <Link className='link' to="/" ><i className="fas fa-chevron-right" /> Pune</Link>

     
    </div>
    <div className="box" >
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
    <div>Created by | <span>Team Dev</span> | all rights reserved</div>
    <div className="btns">
      <div>
        <FaGooglePlay className='footerbtn'/>
        <p>Get it on <br /> google pay</p>
      </div>
      <div>
        <BsApple className='footerbtn'/>
        <p>Get it on <br /> google pay</p>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer