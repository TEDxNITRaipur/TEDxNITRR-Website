import React from 'react'

import fb from "./img/facebook.png"
import insta_img from "./img/insta_icon.png"; 

const SpeakersTemplate = (props) => {
    return (
        <div className="speakers-about_indi">
            <div className="speakers-about_img">
                <img src={props.img} alt={props.name} />
            </div>

            <div className="speakers-about_content">
                <h1>{props.name}</h1>
                <p className='speakers-about_content-abt'>{props.prof}</p>
                <p>{props.abt}</p>
                <div className="speakers-link">
                    <a target='_blank' href={props.fb_id}><img src={fb} alt="" /></a>
                    <a target="_blank" href={props.insta_id}><img src={insta_img} alt="" /></a>
                </div>
            </div>

        </div>
    )
}

export default SpeakersTemplate