import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
    <div className="logo">
      <img src="logo.jpeg" alt="" />
      <span>Veggies</span>
    </div>
    <nav className="navbar">
      <a className="active" href="#home">
        home
      </a>
      <a href="#about">about</a>
      <a href="#pricing">Prices</a>
      <a href="#trainers">Review</a>
      <a href="#book">Contact</a>
    </nav>
    <div className="icons">
      <i className="fa-solid fa-cart-shopping" />
      <i className="fa-solid fa-right-to-bracket" />
      <i className="fa-solid fa-registered" />
    </div>
  </header>
  )
}

export default Header