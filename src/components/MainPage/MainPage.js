import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MainPage.css';
const MainPage = () => {
  return (
    <div id = 'mainpage'>
    <Header/>
    <div id="about-main">
        <div style={{fontSize: '50px', lineHeight: '85px', margin:'40px 0px'}}>
            TEDxNITRaipur 6.O
        </div>
        <p style={{marginBottom: '40px'}}>
            Lorem Ipsum is simply dummy text of the printing and<br/>
            typesetting industry. Lorem Ipsum has been the industry's<br/>
            standard dummy text ever since the 1500s, when an unknown<br/>
            printer took a gallery of type and scrambled it to make a type<br/>specimen book.
        </p>
    </div>
    <hr/>
    <div id="about-main-grid">
        <div id="about-main-grid-left">
            <img height="148px" width="142px" style={{backgroundColor: '#D9D9D9',border: '0px'}} />
        </div>
        <div id="about-main-grid-center">
            "A journey of thousand miles begins with a single step"- Lao Tzu. TEDxNITRaipur has already taken the first step and is all set to embark on its glorious expedition. What makes something ordinary, extraordinary? A canvas with blots of color at just the right places, becomes a work of art. A worthless carbon stone lying deep beneath the earth, becomes a diamond. A metal scrap scattered around, becomes a luxurious car. So this time look at things with different perspective, this time escape the mundane, this time keep aside those old scratched spectacles; this time be a part of TEDxNITRaipur. The pilot edition of TEDxNITRaipur is going to host six eminent speakers from different walks of life to ignite the hidden potentials of students. The exciting lineup of our speakers are the living proof of TEDxNITRaipur's vision- Explore.Experiment.Evolve. The stage is all set for 26th March 2017, so come equipped as we take you on a ride to another dimension this TEDxNITRaipur.
        </div>
        <div id="about-main-grid-right">
        <img height="148px" width="142px" style={{backgroundColor: '#D9D9D9',border: '0px'}} />
        </div>
    </div>
      <Footer />
  </div>
  )
}

export default MainPage;
