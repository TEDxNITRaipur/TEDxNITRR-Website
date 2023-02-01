import React from 'react'
import './Speakers.css';
import img1 from './img/M-hffw5a_400x400.jpg'
import fb from './img/facebook.png'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Speakers = () => {
  return (
<div id = 'speakers'>
    {/* <Header /> */}
    <Navbar/>
    <h1 style={{textAlign:'center'}}>Past Speakers</h1>
<div className="speakers-section">
<div className="about-speakers">
    <div className="about-speakers_indi">
        <div className="about-speakers_img">
            <img src={img1} alt="" />
        </div>

        <div className="about-speakers_content">
            <h1>Hardik Dave</h1>
            <p>Founder and Director - Uniglobe Counsulting Inc.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem et tempora tempore illum!
                Explicabo, tempore doloribus commodi nisi sunt placeat aliquid incidunt voluptas ex ratione
                voluptatibus eligendi, repellendus, animi praesentium?</p>
            <img src="" alt="" />
            <img src="./img/linkedin.png" alt="" />
        </div>

        <div className="about-speakers-socials">
        </div>
    </div>

    <div className="about-speakers_indi">
        <div className="about-speakers_img">
            <img src="./img/M-hffw5a_400x400.jpg" alt="" />
        </div>

        <div className="about-speakers_content">
            <h1>Hardik Dave</h1>
            <p>Founder and Director - Uniglobe Counsulting Inc.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem et tempora tempore illum!
                Explicabo, tempore doloribus commodi nisi sunt placeat aliquid incidunt voluptas ex ratione
                voluptatibus eligendi, repellendus, animi praesentium?</p>
            <img src="./img/facebook.png" alt="" />
            <img src="./img/linkedin.png" alt="" />
        </div>

        <div className="about-speakers-socials">
        </div>
    </div>

    <div className="about-speakers_indi">
        <div className="about-speakers_img">
            <img src="./img/M-hffw5a_400x400.jpg" alt="" />
        </div>

        <div className="about-speakers_content">
            <h1>Hardik Dave</h1>
            <p>Founder and Director - Uniglobe Counsulting Inc.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem et tempora tempore illum!
                Explicabo, tempore doloribus commodi nisi sunt placeat aliquid incidunt voluptas ex ratione
                voluptatibus eligendi, repellendus, animi praesentium?</p>
            <img src="./img/facebook.png" alt="" />
            <img src="./img/linkedin.png" alt="" />
        </div>

        <div className="about-speakers-socials">
        </div>
    </div>

    <div className="about-speakers_indi">
        <div className="about-speakers_img">
            <img src="./img/M-hffw5a_400x400.jpg" alt="" />
        </div>

        <div className="about-speakers_content">
            <h1>Hardik Dave</h1>
            <p>Founder and Director - Uniglobe Counsulting Inc.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem et tempora tempore illum!
                Explicabo, tempore doloribus commodi nisi sunt placeat aliquid incidunt voluptas ex ratione
                voluptatibus eligendi, repellendus, animi praesentium?</p>
            <img src="./img/facebook.png" alt="" />
            <img src="./img/linkedin.png" alt="" />
        </div>

        <div className="about-speakers-socials">
        </div>
    </div>

</div>
</div>
<Footer/>
</div>
  )
}

export default Speakers;
