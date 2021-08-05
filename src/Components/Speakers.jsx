import React from 'react';
import Speaker from './Speaker';
import Fade from 'react-reveal/Fade'
import '../assets/css/speaker.css'
import s1 from '../assets/img/speaker1.jpg'
function Speakers() {
    return (
        <>
        <Fade left>
            <div id="speakerContent">
                <Speaker url={s1} ig="https://google.com"/>
                <Speaker />
                <Speaker />
                <Speaker />
                <Speaker />
                <Speaker />
            </div>
        </Fade>
        </>
    )
}

export default Speakers;
