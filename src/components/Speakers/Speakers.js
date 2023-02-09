import React from 'react'
import './Speakers.css';
import img1 from './img/M-hffw5a_400x400.jpg'
import fb from './img/facebook.png'
import linkedIn from './img/linkedin.png'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Speakers = () => {
  return (
<div id = 'speakers'>
    <Header />
   
    <h1 className='speakers-heading' style={{textAlign:'center', marginTop:'4rem'}}>Past Speakers</h1>
    <div className="speakers-section">
        <div className="speakers-about-speakers">

            <div className="speakers-about_indi">
                <div className="speakers-about_img">
                    <img src={img1} alt="" />
                </div>

                <div className="speakers-about_content">
                    <h1>Hardik Dave</h1>
                    <p>Founder and Director - Uniglobe Counsulting Inc.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem et tempora tempore illum!
                        Explicabo, tempore doloribus commodi nisi sunt placeat aliquid incidunt voluptas ex ratione
                        voluptatibus eligendi, repellendus, animi praesentium?</p>
                    <div className="speakers-link">
                        <a href="#"><img src={fb} alt="" /></a>
                        <a href="#"><img src={linkedIn} alt="" /></a>
                    </div>
                </div>

            </div>


            <div className="speakers-about_indi">
                <div className="speakers-about_img">
                    <img src={img1} alt="" />
                </div>

                <div className="speakers-about_content">
                    <h1>Hardik Dave</h1>
                    <p>Founder and Director - Uniglobe Counsulting Inc.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem et tempora tempore illum!
                        Explicabo, tempore doloribus commodi nisi sunt placeat aliquid incidunt voluptas ex ratione
                        voluptatibus eligendi, repellendus, animi praesentium?</p>
                    <div className="speakers-link">
                        <a href="#"><img src={fb} alt="" /></a>
                        <a href="#"><img src={linkedIn} alt="" /></a>
                    </div>
                </div>

            </div>

            <div className="speakers-about_indi">
                <div className="speakers-about_img">
                    <img src={img1} alt="" />
                </div>

                <div className="speakers-about_content">
                    <h1>Hardik Dave</h1>
                    <p>Founder and Director - Uniglobe Counsulting Inc.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem et tempora tempore illum!
                        Explicabo, tempore doloribus commodi nisi sunt placeat aliquid incidunt voluptas ex ratione
                        voluptatibus eligendi, repellendus, animi praesentium?</p>
                    <div className="speakers-link">
                        <a href="#"><img src={fb} alt="" /></a>
                        <a href="#"><img src={linkedIn} alt="" /></a>
                    </div>
                </div>

            </div>

            <div className="speakers-about_indi">
                <div className="speakers-about_img">
                    <img src={img1} alt="" />
                </div>

                <div className="speakers-about_content">
                    <h1>Hardik Dave</h1>
                    <p>Founder and Director - Uniglobe Counsulting Inc.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem et tempora tempore illum!
                        Explicabo, tempore doloribus commodi nisi sunt placeat aliquid incidunt voluptas ex ratione
                        voluptatibus eligendi, repellendus, animi praesentium?</p>
                    <div className="speakers-link">
                        <a href="#"><img src={fb} alt="" /></a>
                        <a href="#"><img src={linkedIn} alt="" /></a>
                    </div>
                </div>

            </div>


        </div>
    </div>
<Footer/>
</div>
  )
}

export default Speakers;
