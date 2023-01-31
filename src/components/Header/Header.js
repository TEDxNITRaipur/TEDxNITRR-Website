import React from 'react'
import './Header.css';
import img1 from './assets/fixed.png'
import Navbar from '../Navbar/Navbar';
const Header = () => {
  return (
    <>
    <Navbar sticky="top" />
    <div className='home'>
    <div className="fixed-img">
        <img className = "f-image" src={img1} alt="" />
        <div className="overlayer"></div>
        <p className="heading-1"><span style={{color: 'red', fontWeight: 'bold'}}>TEDx</span>NITRaipur</p>
        <p className="subheading-1"><span style={{color: 'red', fontWeight: 'bold'}}>x</span> = independently organized TED event</p>
        <p className="theme-heading">Theme: DARE, DEFY, DIFFER</p>
        <p className="details-1">This event will occur on<br/><span style={{fontWeight: 'bold'}}>March 5, 2023</span><br/><span style={{fontWeight: 'bold'}}>DDU Auditorium, Raipur</span></p>
        <p className="details-2"><span style={{fontWeight: 'bold'}}>Raipur, Chhattisgarh<br />India</span></p>
    </div>
    </div>
    </>
  )
}
export default Header