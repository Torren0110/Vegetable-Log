import React, { useState, useEffect, useRef, useContext } from 'react';
import './Header.css';
import logo from "../../assets/logo.jpeg";
import { AiOutlineShoppingCart, AiOutlineLogout } from 'react-icons/ai';
import { BiLogIn,BiRegistered } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import {Link} from "react-router-dom";
import { ShopContext } from '../../context/shop-context';

const Header = () => {

  const { logout } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    
    <header>
   <div className="logo">
      <Link to="/">
      <img src={logo} alt="" />
      <span>Veggies</span>
      </Link>
      
    </div>
   <nav id="navbar">
 <Link className="links active" to="/home">home</Link>
 <Link className="links" to="/about">about</Link>
 <Link className="links" to="/">Items</Link>
 <Link className="links" to="/sellform">Sell</Link>
</nav>
    
   
    <div className="imglinks">
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="toggle-icon" onClick={toggleDropdown}>
      <Link><FaBars className='icon bars' /></Link>
      </div>
      {isOpen && (
        <ul className="item-list">
            <Link className="links active" to="/home">home</Link>
 <Link className="links" to="/about">about</Link>
 <Link className="links" to="/">Prices</Link>
 <Link className="links" to="/sellform">Sell</Link>
        </ul>
      )}
</div>
      <Link to="/cart"> <AiOutlineShoppingCart className='icon'/></Link>
      <Link to="/login"> <BiLogIn className='icon'/></Link>
      <Link to="/register">  <BiRegistered className='icon'/></Link>
      <button onClick={logout}>  <AiOutlineLogout className='icon'/></button>
    </div>
</header>

  )
}

export default Header