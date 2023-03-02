import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Sponsors.css';
import spons1 from './img/tree.jpg'
import Header from '../Header/Header';
import SponsData from "./spons_2023_data.js"
import SponsCard from "./SponsCard"


const Sponsors = () => {
    return (
        <div id='sponsors'>
            {/* <Navbar /> */}
            <Header />
            <div className="spons-section">
                <div className="spons-content">

                    <h1 id="spons-heading">Our Sponsors</h1>

                    <div className="spons-content-div">

                    {SponsData.map(data => (
                        <SponsCard 
                            img={data.sponsImg}
                            abt={data.sponsAbt}
                        />
                    ))}

                        {/* <div className="spons-content-inner">
                            <img src={spons1} alt="" />
                            <div className="overlay">
                                <div className="content">
                                    <h1>1st</h1>
                                </div>
                            </div>
                        </div>

                        <div className="spons-content-inner">
                            <img src={spons1} alt="" />
                            <div className="overlay">
                                <div className="content">
                                    <h1>2nd</h1>
                                </div>
                            </div>
                        </div>

                        <div className="spons-content-inner">
                            <img src={spons1} alt="" />
                            <div className="overlay">
                                <div className="content">
                                    <h1>3rd</h1>
                                </div>
                            </div>
                        </div>

                        <div className="spons-content-inner">
                            <img src={spons1} alt="" />
                            <div className="overlay">
                                <div className="content">
                                    <h1>4th</h1>
                                </div>
                            </div>
                        </div>

                        <div className="spons-content-inner">
                            <img src={spons1} alt="" />
                            <div className="overlay">
                                <div className="content">
                                    <h1>5th</h1>
                                </div>
                            </div>
                        </div>

                        <div className="spons-content-inner">
                            <img src={spons1} alt="" />
                            <div className="overlay">
                                <div className="content">
                                    <h1>6th</h1>
                                </div>
                            </div>
                        </div>

                        <div className="spons-content-inner">
                            <img src={spons1} alt="" />
                            <div className="overlay">
                                <div className="content">
                                    <h1>7th</h1>
                                </div>
                            </div>
                        </div>

                        <div className="spons-content-inner">
                            <img src={spons1} alt="" />
                            <div className="overlay">
                                <div className="content">
                                    <h1>8th</h1>
                                </div>
                            </div>
                        </div>

                        <div className="spons-content-inner">
                            <img src={spons1} alt="" />
                            <div className="overlay">
                                <div className="content">
                                    <h1>9th</h1>
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Sponsors;