import React from 'react';
import './Teams.css';

const HcCard = (props) => {
  return (
    <div className='teams-card-container'>
      <img className='teams-card-img' src = {props.image_src} alt = "profile-img" />
      <div className='teams-card-details'>
        
        <div className='teams-card-name'>{props.name}</div>
        <div className='teams-card-desgn'>{props.desgn}</div>
      </div>
    </div>
  )
}

export default HcCard