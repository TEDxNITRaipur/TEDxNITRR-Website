import React from 'react'
import './Teams.css';
import { HcData } from './HcData';
import ExeData from "./ExeData"
import CCdata from './CCData';
import CcCard from './CCDetailsCard';
import ExeCard from './ExeDetailsCard';
import HcCard from './HcDetailsCard';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Teams = () => {
  return (
    <>
      <Header />
      {/* <Navbar/> */}
      <div className='teams'>
        <h1 className='teams-heading'>Organising Team</h1>

        {/* HEAD COORDINATOR SECTION */}

        <div className='teams-body'>

          <div className='teams-body-head'>
            <h1>Head Coordinators</h1>
          </div>

          <div className='teams-body-detail'>
            {HcData.map((data) => (
              <HcCard
                name={data.name}
                image_src={data.image_src}
                desgn={data.desgn}
              />
            ))}
          </div>

        </div>

        <hr />

        {/* CORE COORDINATOR SECTION */}

        <div className='teams-body'>

          <div className='teams-body-head'>
            <h1>Core Coordinators</h1>
          </div>

          <div className='teams-body-detail'>
            {CCdata.map((data) => (
              <CcCard
                name={data.name}
                desgn={data.dsgn}
              />
            ))}
          </div>

        </div>

        <hr />

        {/* EXECUTIVES SECTION */}

        <div className='teams-body'>

          <div className='teams-body-head'>
            <h1>Executives</h1>
          </div>

          <div className='teams-body-detail'>
            {ExeData.map((data) => (
              <ExeCard
                name={data.name}
                desgn="Executives"
              />
            ))}
          </div>

        </div>

      </div>
      <Footer />
    </>
  );
}

export default Teams
