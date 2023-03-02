import React from 'react'
import './Speakers.css';
import img1 from './img/M-hffw5a_400x400.jpg'
import fb from './img/facebook.png'
import linkedIn from './img/linkedin.png'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Data from "./speakersData"
import SpeakersTemplate from './SpeakersTemplate';


const Speakers = () => {

    const DataTemp = Data.map((data) => {
        return (
            <SpeakersTemplate
                name={data.name}
                prof={data.prof}
                abt={data.abt}
                img={data.img}
                fb_id={data.fb_id}
                insta_id={data.insta_id}
            />
        )
    })

    return (
        <div id='speakers'>
            <Header />

            <h1 className='speakers-heading' style={{ textAlign: 'center', marginTop: '4rem'}}> Speakers for <span>TEDx</span> 6.0</h1>
            <div className="speakers-section">
                <div className="speakers-about-speakers">

                    {DataTemp}

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Speakers;
