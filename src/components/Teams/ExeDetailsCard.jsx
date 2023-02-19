import React from "react";
import './Teams.css';

const ExeCard = (props) => {
    return (
      <div className='teams-card-container'>
        <div className='teams-card-details'>
          <div className='teams-card-name'>{props.name}</div>
          <div className='teams-card-desgn'>{props.desgn}</div>
        </div>
      </div>
    )
  }
  
  export default ExeCard;