import React, { useState, useEffect, useRef, useContext } from 'react';
import './Header.css';
import logo from "../../assets/vegigo.png";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiLogIn,BiRegistered,BiLogOut, BiUser } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import {Link} from "react-router-dom";
import { ShopContext } from '../../context/shop-context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const { uid, logout, user } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropRef = useRef(null);

  const LogOut =async ()=>{
    toast.success('LOGGED OUT!', {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
      autoClose: 1000,
      pauseOnHover: false,
    });
    await delay(1000)
    logout()
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDrop = () => {
    setOpen(!Open);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <>
      <ToastContainer/>
    <header>
   <div className="logo">
      <Link to="/">
      <img src={logo} alt="" />
      {/* <span>Veggies</span> */}
      </Link>
      
    </div>
   <nav id="navbar">
    <Link className="links " to="/">home</Link>
    <Link className="links" to="/about">about</Link>
    <Link className="links" to="/prices">Items</Link>
    <Link className="links" to="/predict">Predictions</Link>
    {user.seller ? <Link className="links" to="/sellform">Sell</Link>: <></> }
   </nav>
    
   
    <div className="imglinks">
      <div className="dropdown-container" ref={dropdownRef}>
        <div className="toggle-icon" onClick={toggleDropdown}>
        <Link><FaBars className='icon bars' /></Link>
        </div>
        {isOpen && (
          <ul className="item-list">
              <Link className="links active" to="/">home</Link>
              <Link className="links" to="/about">about</Link>
              <Link className="links" to="/prices">Prices</Link>
              <Link className="links" to="/predict">Predictions</Link>
              {user.seller ? <Link className="links" to="/sellform">Sell</Link>: <></> }
          </ul>
        )}
     </div>
     {
  uid === '' ?
  [
    <Link key="login" to="/login"> <BiLogIn className='icon'/></Link>,
    <Link key="register" to="/register">  <BiRegistered className='icon'/></Link>
  ]
  :
  [
    <Link key="cart" to="/cart"> <AiOutlineShoppingCart className='icon'/></Link>,
    <div className="dropdown-container" ref={dropRef} key="userDropdown">
      <div className="toggle-icon" onClick={toggleDrop}>
        <Link><BiUser className='icon' /></Link>
      </div>
      {Open && (
        <ul className="items">
          <Link key="profile" className="links active" to="/profile">Profile</Link>
          <Link key="orders" className="links" to="/orders">Orders</Link>
          {user.seller ? <Link key="sales" className="links" to="/sales">Sales</Link> : null }
          <Link key="logout" onClick={LogOut} className=" links" to="/">Logout</Link>
        </ul>
      )}
    </div>
        ]
      }
    </div>
</header>
</>
  )
}

export default Header