import React, {useEffect} from 'react';
import Particles from 'react-tsparticles';
import Counter from './Counter';
import options from '../assets/particlesjs-config';
import '../assets/css/cover.css'
import $ from 'jquery';


function Cover() {

    useEffect(() => {
        window
            .addEventListener('scroll', ({path})=> {
                const Window = path[1].scrollY;
                // console.log(Window);
                    $('.coverHead').css({"transform": `translateY(${-0.2*Window}px)`, 'transition': '100ms', 'will-change': 'transform'})
                // $('#cover').css({"background": `-webkit-linear-gradient(to right, #000C40, #${parseInt('F0F2F0', 16) - Window}`,  "background": `linear-gradient(to right, #000C40, #${parseInt('F0F2F0', 16) - 10000000*Window}`});
            });
    }, []);
    return (
        <div id="cover">
            <div className="coverContainer">
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
                <div className="counter">
                    <Counter/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Cover;
