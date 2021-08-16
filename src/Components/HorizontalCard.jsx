import React from 'react';
import Fade from 'react-reveal/Fade';
import '../assets/css/horizontal.css';

function HorizontalCard(props) {
    return (
            <Fade left>
        <div className="hCard">
            <div className="imgCard" style={{backgroundColor: props.background}}> 
            <i class={`las ${props.icon}`}></i>
            </div>
            <div className="textCard">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
            </Fade>
    )
}

export default HorizontalCard;
