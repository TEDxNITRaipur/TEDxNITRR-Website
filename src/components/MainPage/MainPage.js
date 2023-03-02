import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import NavbarSm from '../NavbarSm/NavbarSm';
import './MainPage.css';

import tedx1_img from "./main.jpg"
import tedx2_img from "./tedx1.jpeg";

const MainPage = () => {
    return (
        <div id='mainpage'>
            <Header />
            <div id="about-main">
                <div style={{ fontSize: '70px', lineHeight: '85px', margin: '40px 0px' }}>
                    <span style={{color: "red", fontWeight: "700"}}>TEDx</span>NITRaipur 6.O
                </div>
                <p>
                    <span style={{ fontWeight: "800", color: "red" }}>TedxNITRaipur</span> is returning as a physical event following a two-year gap! As a TEDx community, we offer sessions that are inspiring and engaging and provide a chance to speak up about your ideas whether you are an audience or speaker. Rejuvenating genuine stories connecting all the people involved with the philosophy of publicize-educate-inspire-attract. Speakers from various domains will take the stage to inspire the minds and hearts of students. In addition, we would be having local speakers from Chhattisgarh itself, to exhibit the ability that the state holds. Promotional events filled with fun activities will come as a complete package. With this chance to restart and fuel up ourselves and the theme of DARE, DEFY, DIFFER come join us at TEDxNITRaipur to make the most out of this year and welcome life back to normalcy. To be held at the city's focal point, the renowned Pandit Deendayal Upadhyay Auditorium Raipur. Well-kept auditoriums, and brilliant works of art portraying the way of life of the state invite us. Perfect for a huge crowd. Many motivational speakers and budding game changers are provided with opportunities to volunteer their time. Not only a source of inspiration but also a grand celebration of THE TEDxNITRaipur, one of NIT Raipur's most celebraTED communities.
                </p>
            </div>


            <hr />


            <div id="about-main-grid">

                <div id="about-main-grid-left">
                    <img src={tedx1_img} height="148px" width="142px" style={{ backgroundColor: '#D9D9D9', border: '0px' }} />
                </div>

                <div id="about-main-grid-center">
                    "A journey of thousand miles begins with a single step". This quote personifies the journey of how started as a vision and now we are achieving the greatest height of success. This was possible only because of the wholehearted support of our audience and the continuous efforts of our dedicated team members. The path was exciting, adventurous, and filled with challenges but our vision kept us going. Our premier event with the theme "Explored, Experiment, Evolve", brought in a ray of light for everyone. From then, we have only grown and touched greater heights. The ideas presented by our honorable speakers have echoed in the hearts of the audience and grown into revolutions of innovation.
                    <br />
                    And then suddenly the world was covered with darkness with the ardent of the pandemic. We felt only the light of inspiring ideas could lift the fog and enlighten the path forward. So, we took a leap of faith and organized an online event with the theme "Warrior Within", with the vision that we can find the Warrior Within us to fight with uncertainty and negativity all around. TEDxNITRaipur was the only club of NIT Raipur that managed to successfully host their original event even during the pandemic!
                    <br />
                    And now, as the world returns to normal, we are back with a bang! With mind-boggling ideas, enchanting stories, and life-changing talks, the sixth edition of TEDxNITRaipur is going to be bigger and better. Are you ready to embark on a journey of inspiration and creativity at this TEDx event? Let's explore new ideas and challenge our perspectives together. Join us on this journey of DARE, DEFY, DIFFER!
                </div>

                <div id="about-main-grid-right">
                    <img src={tedx2_img} height="148px" width="142px" style={{ backgroundColor: '#D9D9D9', border: '0px' }} />
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default MainPage;
