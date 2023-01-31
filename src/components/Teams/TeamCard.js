import React from 'react';
import './Teams.css';
import img from '../../Images/adityatiwari.jpeg';
const TeamCard = ({data}) => {
  return (
    <div className='teams-card-container'>
      <img className='teams-card-img' src = {img} alt = "profile-img" />
      <div className='teams-card-details'>
        
        <div className='teams-card-name'>{data.name}</div>
        <div className='teams-card-desgn'>{data.desgn}</div>
      </div>
    </div>
  )
}

export default TeamCard