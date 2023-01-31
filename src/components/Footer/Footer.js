import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <div>
        <footer className="gap">
        <div className="col">
            <h2><span>TEDx</span>NITRaipur<s /></h2>
        <div className="col">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Partners</a>
            <a href="#">Team</a>
            <a href="#">Speakers</a>
        </div>
    </div>

        <div className="col">
            <h2>Social Media</h2>
            <div className="icons">
        <a href="https://www.facebook.com/tedxnitraipur/?ref=page_internal"><i className="fa-brands fa-square-facebook"></i>Facebook</a>
            <a href="https://www.instagram.com/tedxnitraipur/"><i className="fa-brands fa-instagram"></i>Instagram</a>
                <a href="https://www.linkedin.com/company/tedx-nit-raipur/mycompany/"><i className="fa-brands fa-linkedin"></i>Linkedin</a>
                    <a href=""> <i className="fa-brands fa-youtube"></i>Youtube</a>
            </div>
        </div>

        <div className="col">
        <h2> Contact Us</h2>
        <div className="col">
            <ul>
        <li>Aditya Tiwari</li>
        <li>Phone:</li>
            </ul>
            
            <ul>
                <li>Aditya Tiwari</li>
                <li>Phone:</li>
            </ul>
            <button className="button" ><span>Don't hesitate to mail us</span></button>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer