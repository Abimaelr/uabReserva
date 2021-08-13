import React, {useEffect} from 'react';
import Counter from './Counter';
import '../assets/css/cover.css'
import $ from 'jquery';
import Particles from 'react-tsparticles';
import config from '../assets/particlesjs-config';
import {Link} from 'react-router-dom';


function Cover() {

    useEffect(() => {
        window
            .addEventListener('scroll', (event)=> {
                const Window = window.scrollY;
              
                $('.coverHead').css({"transform": `translateY(${-0.25*Window}px)`, 'transition': '500ms', 'will-change': 'transform'})
                // $('#cover').css({"background": `-webkit-linear-gradient(to right, #000C40, #${parseInt('F0F2F0', 16) - Window}`,  "background": `linear-gradient(to right, #000C40, #${parseInt('F0F2F0', 16) - 10000000*Window}`});
            });
    }, []);
    return (
        <div id="cover">
            <div className="coverContainer">
            <Particles options={config} />
            {/* <video preload playsinline autoplay="true" controls={false} muted id="coverItem">
                <source src='https://storage.googleapis.com/portal-pmjp.appspot.com/video/cover.mp4' type="video/mp4"/>
                <source src="https://storage.googleapis.com/portal-pmjp.appspot.com/video/cover.webm" type="video/webm"></source>
                <source src={webm} type="video/webm"></source>
                Your browser does not support the video tag.
            </video> */}
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
                    <a href="#content">
                        <button className="Button">
                                Saiba Mais
                        </button>
                    </a>
                    </div>
                    {/* <div className="titleBox">
                        <h1>Futuro, Design,Tecnologia, Monetização e Eventos Corporativos</h1>
                    </div> */}
                    <div className="counter">
                        <Counter/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover;
