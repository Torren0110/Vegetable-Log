import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
  <div className="box-container">
    <div className="box" data-aos="fade-right">
      <h3>quick links</h3>
      <a ><i className="fas fa-chevron-right" /> Home</a>
      <a ><i className="fas fa-chevron-right" /> About</a>
      <a ><i className="fas fa-chevron-right" /> Prices</a>
      <a ><i className="fas fa-chevron-right" /> Review</a>
      <a ><i className="fas fa-chevron-right" /> Contact</a>
     
    </div>
    <div className="box" data-aos="fade-right">
      <h3>Top Cities</h3>
      <a ><i className="fas fa-chevron-right" /> Dehradun</a>
      <a ><i className="fas fa-chevron-right" /> Delhi</a>
      <a ><i className="fas fa-chevron-right" /> Mumbai</a>
      <a ><i className="fas fa-chevron-right" /> Bangalore</a>
      <a ><i className="fas fa-chevron-right" /> Pune</a>

     
    </div>
    <div className="box" data-aos="fade-left">
      <h3>follow us</h3>
      <a ><i className="fab fa-facebook-f" /> facebook</a>
      <a ><i className="fab fa-twitter" /> twitter</a>
      <a ><i className="fab fa-linkedin" /> linkedin</a>
      <a ><i className="fab fa-instagram" /> Instagram</a>
      <a ><i className="fab fa-pinterest" /> Pinterest</a>
     
    </div>
    <div className="box" id="contact">
      <h3>Contact Us</h3>
      <input type="text" name="" placeholder="Your name..." id="" /> <br />
      <input type="email" name="" placeholder="Your email..." id="" /> <br />
      <input type="text" name="" placeholder="Enter your message here..." id="" />
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