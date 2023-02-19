import React, { useState } from 'react'
import "./Sponsors.css"

const SponsCard = (props) => {

    const [serial, setSerial] = useState(1)

    return (
        <div className="spons-content-inner">
            <img src={props.img} alt="" />
            <div className="overlay">
                <div className="content">
                    {/* <h1>{props.serial}</h1> */}
                    <p>{props.abt}</p>
                </div>
            </div>
        </div>
    )
}

export default SponsCard