import React from 'react'
import img1 from './assets/fixed.png';
import img2 from './assets/photo-1.jpg';
import Navbar from '../Navbar/Navbar';
import Speakers from '../Speakers/Speakers';
import './HomePage.css';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';
import NavbarSm from '../NavbarSm/NavbarSm';

const HomePage = () => {
  return (
    <>
    <div className='home'>
    {/* <Navbar />  */}
    {/* <NavbarSm /> */}
    <Header />
    <div className="home-fixed-img">
        <img className="home-f-image" src={img1} alt=""/>
        <div className="home-overlayer"></div>
        <p className="home-heading-1"><span style={{color: 'red', fontWeight: 'bold'}}>TEDx</span>NITRaipur</p>
        <p className="home-subheading-1"><span style={{color: 'red', fontWeight: 'bold'}}>x</span> = independently organized TED event</p>
        <p className="home-theme-heading">Theme: DARE, DEFY, DIFFER</p>
        <p className="home-details-1">This event will occur on<br/><span style={{fontWeight: 'bold'}}>March 5, 2023</span><br/><span style={{fontWeight: 'bold'}}>DDU Auditorium, Raipur</span></p>
        <p className="home-details-2"><span style={{fontWeight: 'bold'}}>Raipur, Chhattisgarh<br/>India</span></p>
    </div>
    <div className="home-intro-1">
        <div className="home-photo-1">
            <img src={img2} alt=""/>
        </div>
        <div className="home-text-1">
            <h1 className="home-header-1">What is TEDx ?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda ullam inventore, dignissimos fuga perspiciatis tenetur delectus! Eos possimus architecto alias beatae. Fugiat delectus autem assumenda id illo. Commodi, sapiente.
            </p><button className="home-learn-btn-1">Learn More</button>
        </div>
    </div>
    <div className="home-intro-2">
        <div className="home-photo-1 home-photo-2">
            <img src={img1} alt=""/>
        </div>
        <div className="home-text-1">
            <h1 className="home-header-1">What is TEDxNITRaipur?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda ullam inventore, dignissimos fuga perspiciatis tenetur delectus! Eos possimus architecto alias beatae. Fugiat delectus autem assumenda id illo. Commodi, sapiente.
            </p><button className="home-learn-btn-1">Learn More</button>
        </div>
    </div>
    <div className="home-gallery">
        <div className="home-text-3">
            <h1 className="home-header-1">TEDxNITRaipur Gallery</h1>
        </div>
        <div className="home-carousel-wrapper">
            <span id="home-item-1"></span>
            <span id="home-item-2"></span>
            <span id="home-item-3"></span>
            <div className="home-carousel-item home-item-1">
                <a href="#home-item-3" className="home-arrow-prev home-arrow"></a>
                <a href="#home-item-2" className="home-arrow-next home-arrow"></a>
            </div>

            <div className="home-carousel-item home-item-2">
                <a href="#home-item-1" className="home-arrow-prev home-arrow"></a>
                <a href="#home-item-3" className="home-arrow-next home-arrow"></a>
            </div>

            <div className="home-carousel-item home-item-3">
                <a href="#home-item-2" className="home-arrow-prev home-arrow"></a>
                <a href="#home-item-1" className="home-arrow-next home-arrow"></a>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</>
  )
}

export default HomePage;