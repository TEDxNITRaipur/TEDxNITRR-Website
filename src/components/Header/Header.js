import React from 'react'
import './Header.css';
import img1 from './assets/fixed.png'
import Navbar from '../Navbar/Navbar';
import NavbarSm from '../NavbarSm/NavbarSm';
const Header = () => {
  return (
    <>
    
    <div className='home1'>
    <Navbar className = "big-navbar" sticky="top" />
    </div>
    <div className='home2'>
      <NavbarSm className = 'sm-navbar' />
    </div>
    </>
  )
}
export default Header