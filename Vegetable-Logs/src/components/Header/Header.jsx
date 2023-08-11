import React from 'react';
import './Header.css';
import logo from "../../assets/logo.jpeg";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import { BiRegistered } from 'react-icons/bi';
import {Link} from "react-router-dom";



const Header = () => {
  return (
    <header className="header">
    <div className="logo">
      <Link to="/">
      <img src={logo} alt="" />
      <span>Veggies</span>
      </Link>
      
    </div>
    <nav className="navbar">
      <Link className="active" to="/home">home</Link>
      <Link to="/about">about</Link>
      <Link to="/">Prices</Link>
      <Link to="/">Review</Link>
      <Link to="/">Contact</Link>
    </nav>
    <div className="icons">
      <Link to="/cart"> <AiOutlineShoppingCart  className='icon'/></Link>
      <Link to="/login"> <BiLogIn className='icon'/></Link>
      <Link to="/register">  <BiRegistered className='icon'/></Link>
    </div>
  </header>
  )
}

export default Header

