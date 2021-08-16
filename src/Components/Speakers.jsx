import React from 'react';
import Speaker from './Speaker';
import Fade from 'react-reveal/Fade'
import '../assets/css/speaker.css'
import p1 from '../assets/img/p1.jpeg'
function Speakers() {
    return (
        <>
        <Fade left>
            <div id="speakerContent">
                <Speaker
                    url={p1}
                    name="Priscila Dias"
                    title="FrontEnd Developer"
                    description="lorem..."
                    ig="https://google.com"
                />
                <Speaker />
                <Speaker />
                <Speaker />
                <Speaker />
                <Speaker />
            </div>
            <div id="speakerContent">
                {/* <Speaker
                    url={p1}
                    name="Abimael Albuquerque"
                    title="FrontEnd Developer"
                    description="lorem..."
                    ig="https://google.com"
                /> */}
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
