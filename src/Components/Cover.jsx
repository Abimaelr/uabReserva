import React from 'react';
import Particles from 'react-tsparticles';
import options from '../assets/particlesjs-config';
import '../assets/css/cover.css'
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Cover() {
    return (
        <div id="cover">
            <Particles
                id="tsparticles"
                options = {options}
            />
            <div className="coverHead">
                <div id="logo" />
                <div className="titleBox">
                    <h1>Futuro, Design,Tecnologia, Monetização e Eventos Corporativos</h1>
                </div>
            </div>
        </div>
    )
}

export default Cover;
