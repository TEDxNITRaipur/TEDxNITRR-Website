import React from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from '../../Images/tedLogo.png';
import './Navbar.css';
import Header from '../Header/Header';
const Navbar = () => {
  return (
    <div className='navbar-parent'>
    <div className='navbar'>
     <div className='navbar-logo'>
       <img className = 'navbar-logo-img' src ={logo} alt = "logo" />
     </div>
     <div className='navbar-navigation'>
        <Link to = "/aboutus"><div className='navbar-nav-items'>About us</div></Link>
        <Link to ="/speakers"><div className='navbar-nav-items'>Speakers</div></Link>
        <Link to ="/sponsors"><div className='navbar-nav-items'>Sponsors</div></Link>
        <Link to ="/team"><div className='navbar-nav-items'>Our Team</div></Link>
        <Link to ="/"><div className='navbar-nav-items'>Home</div></Link>
     </div>
    </div>
    <Outlet />
 </div>
  )
}

export default Navbar
