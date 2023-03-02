import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react"
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";
import "./NavbarSm.css"

const NavbarSm = () => {
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: 'red'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '40px',
      width: '40px'
    },
    bmCross: {
      background: 'red'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      backdropFilter: 'blur(5px)',
      padding: '2.5em 1.5em 0',
      fontSize: '1.5em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.5)'
    }
  }

  return (
    <>
      <Menu styles={styles}>

        <Link to="/"><div className='navbar-nav-items'>Home</div></Link>
        <Link to="/speakers"><div className='navbar-nav-items'>Speakers</div></Link>
        <Link to="/sponsors"><div className='navbar-nav-items'>Sponsors</div></Link>
        <Link to="/team"><div className='navbar-nav-items'>Our Team</div></Link>
        <Link to="/aboutus"><div className='navbar-nav-items'>About us</div></Link>

      </Menu>
    </>
  )
}

export default NavbarSm;