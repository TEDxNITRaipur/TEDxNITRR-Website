import React from 'react'
import { useState, useEffect, useRef } from 'react';
import img1 from './assets/fixed.png';
import img2 from './assets/photo-1.jpg';
import img3 from "./assets/ted-logo.png";
import Navbar from '../Navbar/Navbar';
import Speakers from '../Speakers/Speakers';
import './HomePage.css';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';
import NavbarSm from '../NavbarSm/NavbarSm';
import { Carousel } from 'antd';  //added "ANT DESIGN" css framework for carousel effect


// GALLERY IMAGES- past speakers
// import corousel1 from "./assets/carousel-1.png"
// import corousel2 from "./assets/carousel-2.png"
// import corousel3 from "./assets/carousel-3.png"
// import carousel6 from "./assets/carousel-6.jpg"
// import carousel7 from "./assets/carousel-7.jpg"
// import carousel8 from "./assets/carousel-8.jpg"
// import carousel9 from "./assets/carousel-9.jpg"
// import carousel10 from "./assets/carousel-10.jpg"
// import carousel12 from "./assets/carousel-12.jpg"
// import carousel13 from "./assets/carousel-13.jpg"
// import carousel14 from "./assets/carousel-14.jpg"
// import carousel15 from "./assets/carousel-15.jpg"
// import carousel16 from "./assets/carousel-16.jpg"
// import carousel17 from "./assets/carousel-17.jpg"


// GALLERY IMAGES- 2023 speakers 
import carousel1 from "./assets/2023_speakers_img/aarzoo_poster.jpg"
import carousel2 from "./assets/2023_speakers_img/anand_poster.jpg"
import carousel3 from "./assets/2023_speakers_img/deepak_poster.jpg"
import carousel4 from "./assets/2023_speakers_img/ocean_poster.jpg"
import carousel5 from "./assets/2023_speakers_img/prakhar_poster.jpg"
import carousel6 from "./assets/2023_speakers_img/rajat_poster.jpg"
import carousel7 from "./assets/2023_speakers_img/srinivas_Poster.jpg"


const HomePage = () => {

    // const [selectedImg, setselectedImg] = useState(0)
    // const [allImages, setallImages] = useState([corousel1, corousel2, corousel3])

    // useEffect(() => {
    //     setInterval(() => {
    //         setselectedImg(selectedImg => selectedImg < 2 ? selectedImg + 1 : 0)
    //     }, 4000);
    // }, [])


    // used "useRef" hook for the buttons of carousel effect.
    const ref = useRef()

    return (
        <>
            <div className='home'>
                {/* <Navbar />  */}
                {/* <NavbarSm /> */}
                <Header />
                <div className="home-fixed-img">
                    <img className="home-f-image" src={img1} alt="" />
                    <div className="home-overlayer"></div>
                    <p className="home-heading-1"><span style={{ color: 'red', fontWeight: 'bold' }}>TEDx</span>NITRaipur</p>
                    <p className="home-subheading-1"><span style={{ color: 'red', fontWeight: 'bold' }}>x</span> = independently organized TED event</p>
                    <p className="home-theme-heading">Theme: DARE, DEFY, DIFFER</p>
                    <p className="home-details-1">This event will occur on<br /><span style={{ fontWeight: 'bold' }}>March 2023</span><br /><span style={{ fontWeight: 'bold' }}>DDU Auditorium, Raipur</span></p>
                    <p className="home-details-2"><span style={{ fontWeight: 'bold' }}>Raipur, Chhattisgarh<br />India</span></p>
                </div>

                <div className="home-intro-2">
                    <div className="home-photo-1 home-photo-2">
                        <img src={img3} alt="" />
                    </div>
                    <div className="home-text-1">
                        <h1 className="home-header-1">What is TED?</h1>
                        <p>
                            TED is a non-profit global community that invites and advances individuals from different cultures and disciplines who seek a deeper understanding of the world. Fully devoted to the motto, ???Ideas worth spreading???, TED was founded in 1984 as a conference that brought together technology, entertainment, and design. It now offers content in more than 100 languages on practically all subjects, including business, global challenges, and science.

                        </p>
                    </div>
                </div>

                <div className="home-intro-1">
                    <div className="home-photo-1">
                        <img src={img2} alt="" />
                    </div>
                    <div className="home-text-1">
                        <h1 className="home-header-1">What is TEDx ?</h1>
                        <p>
                            x signifies an independently organized TED event. With the mission of ideas worth spreading, TED created an initiative named TEDx to convey forward TED-like insight within the surrounding networks and local communities through self-coordinated events. TEDx events incorporate live speaker sessions that bring forward like-minded people and are conducted freely under a free permit conceded by TED. The craft of narrating on the stage with flash discussions and sharing their earned experience is made possible by an enthusiastic team who plan and organize the event, adhering to the rules of TED.
                        </p>
                    </div>
                </div>

                <div className="home-intro-2">
                    <div className="home-photo-1 home-photo-2">
                        <img src={img1} alt="" />
                    </div>
                    <div className="home-text-1">
                        <h1 className="home-header-1">What is TEDxNITRaipur?</h1>
                        <p>
                            TEDxNITRaipur is a full-day conference scheduled with speakers, curated from thought leaders in India and abroad as well as grassroots speakers sharing their inspiring, untold stories. It offers a platform to bring together, technology, entertainment, and design from various visionaries and
                            intellects. It has expanded and changed over the years as part of its mission to advance the TED principles. We aspire to inspire people in and around Raipur, and beyond, by introducing these creative brains to society.

                        </p>
                    </div>
                </div>

                <div className="home-gallery">
                    <div className="home-text-3">
                        <h1 className="home-header-1"><span>TEDx</span>NITRaipur Gallery</h1>
                    </div>

                    {/* <div className="home-carousel-wrapper">
                        <img src={allImages[selectedImg]} />
                    </div> */}

                    <div className="home-carousel-wrapper">

                        <Carousel
                            className='carousel'
                            autoplay
                            dots={true}
                            pauseOnHover={true}
                            ref={ref}
                        >
                            <img src={carousel6}/>
                            <img src={carousel1} />
                            <img src={carousel2} />
                            <img src={carousel3} />
                            <img src={carousel4} />
                            <img src={carousel5} />
                            <img src={carousel7}/>
                            {/* <img src={carousel8}/>
                            <img src={carousel9}/>
                            <img src={carousel10}/>
                            <img src={carousel12}/>
                            <img src={carousel13}/>
                            <img src={carousel14}/>
                            <img src={carousel15}/>
                            <img src={carousel16}/>
                            <img src={carousel17}/> */}
                        </Carousel>

                        {/* <div className='home-carousel-wrapper-btn'>

                        </div> */}

                        <div className='home-carousel-wrapper-btn'>

                            <button className='home-carousel-wrapper-btn-innerBtn' z
                                onClick={() => {
                                    ref.current.prev()
                                }}
                            >
                                {/* &#8592; */}
                                &#60;
                            </button>

                            <button className='home-carousel-wrapper-btn-innerBtn'
                                onClick={() => {
                                    ref.current.next()
                                }}
                            >
                                {/* &#8594; */}
                                &#62;
                            </button>

                        </div>

                    </div>

                </div>

                <Footer />
            </div>
        </>
    )
}

export default HomePage;