import React from 'react';
import Particles from 'react-tsparticles';
import {Button} from 'react-bootstrap';
import Counter from './Counter';
import options from '../assets/particlesjs-config';
import '../assets/css/cover.css'

function Cover() {
    return (
        <div id="cover">
            <Particles
                id="tsparticles"
                options = {options}
            />
            <div className="coverHead">
                <div id="mainInfo">
                <div className="infoBox">
                    <div className="features">
                        <ion-icon name="calendar"/>
                        <p>24 a 28 OUT</p>
                    </div>
                    <div className="features">
                        <ion-icon name="people"/>
                        <p>12 Palestrantes</p>
                    </div>
                    <div className="features">
                        <ion-icon name="location"/>
                        <p>Even3</p>
                    </div>
                </div>
                    <div id="logo" />
                    <button id="subscribeButton" onClick={()=> alert('opa')}>Inscreva-se</button>
                </div>
                <div className="titleBox">
                    <h1>Futuro, Design,Tecnologia, Monetização e Eventos Corporativos</h1>
                </div>
            </div>
           
              <div className="counter">
                <Counter/>
              </div>
            </div>
    )
}

export default Cover;
