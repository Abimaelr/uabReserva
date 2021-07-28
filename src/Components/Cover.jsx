import React from 'react';
import Particles from 'react-tsparticles';
import options from '../assets/particlesjs-config';
import '../assets/css/cover.css'

function Cover() {
    return (
        <div className="cover">
            <Particles
                id="tsparticles"
                options = {options}
            />
        </div>
    )
}

export default Cover;
