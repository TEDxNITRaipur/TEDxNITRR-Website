import React from 'react'
import './Teams.css';
import { teamData } from './TeamData';
import TeamCard from './TeamCard';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Teams = () => {
  return (
    <>
    <Header/>
    {/* <Navbar/> */}
    <div className='teams'>
        <div className='teams-heading'>Organising Team</div>
        <div className='teams-body'>
           {teamData.map((data, idx) => (
               <TeamCard key = {idx} data = {data} />
           ))}
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default Teams
