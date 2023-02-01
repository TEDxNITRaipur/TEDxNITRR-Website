import React from 'react'
import './Footer.css';
import {Link, Outlet} from 'react-router-dom';
import fb from './assets/fb.png';
import insta from './assets/insta.png';
import linkedin from './assets/linkedin.png';
import yt from './assets/yt.png';
const Footer = () => {
  return (
<div className='footer'>
<div className="footer-footer">
        <div className="footer-container-1">
            <p className="footer-heading"><span className="footer-head">TEDx</span>NITRaipur</p>
            <ul className="footer-ul">
                <li><Link to ="/" className="footer-ul-a">Home</Link></li>
                <li><Link to ="/aboutus" className="footer-ul-a" href="#">About</Link></li>
                <li><Link to ="/sponsors" className="footer-ul-a" href="#">Partners</Link></li>
                <li><Link to ="/team" className="footer-ul-a" href="#">Team</Link></li>
                <li><Link to ="/speakers" className="footer-ul-a" href="#">Speakers</Link></li>
            </ul>
        </div>
        
        <div className="footer-container-2">
            <p className="footer-heading">Social Media</p>
            <ul className="footer-ul socials">
                <li><a className="footer-ul-a" href="https://www.facebook.com/tedxnitraipur" target="_blank"><div className="footer-socials-container"><img src={fb} alt=""  />Facebook</div></a></li>
                <li><a className="footer-ul-a" href="https://www.instagram.com/tedxnitraipur/" target="_blank"><div className="footer-socials-container"><img src={insta} alt=""  />Instagram</div></a></li>
                <li><a className="footer-ul-a" href="https://www.linkedin.com/company/tedx-nit-raipur/" target="_blank"><div className="footer-socials-container"><img src={linkedin} alt=""  />LinkedIn</div></a></li>
                <li><a className="footer-ul-a" href="https://www.youtube.com/@tedxnitraipur2481" target="_blank"><div className="footer-socials-container"><img src={yt} alt=""  />Youtube</div></a></li>
            </ul>
        </div>
        <div className="footer-container-3">
            <p className="footer-heading">Contact Us</p>
            <ul className="footer-ul">
                <li>Aditya Tiwari</li>
                <li>Phone: </li>
                <li>Aditya Tiwari</li>
                <li>Phone: </li>
            </ul>
            <button className="footer-contact-btn" style={{verticalAlign:'middle'}}><span>Don't hesitate to mail us</span></button>
        </div>
    </div>
    </div>
  )
}

export default Footer