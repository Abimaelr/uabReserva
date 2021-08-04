import React from 'react';
import Speaker from './Speaker';
import '../assets/css/speaker.css'
import s1 from '../assets/img/speaker1.jpg'
function Speakers() {
    return (
        <>
        <div id="speakerContent">
            <Speaker url={s1} />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
        </div>
        </>
    )
}

export default Speakers;
