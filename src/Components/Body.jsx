import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import {Container, Row, Col} from 'react-bootstrap';
import HorizontalCard from './HorizontalCard';
import '../assets/css/body.css';
import Speakers from './Speakers';
import SpecialTitle from './SpecialTitle';
import Sponsors from './Sponsors';
import Schedule from './Schedule';
import girl from '../assets/img/m.png';

function Body() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, []);
    return (
       <div id="content">
       <Container >
           <br />
           <Row className="section">
                <SpecialTitle title="Bem vindos" subTitle="I Seminário Interpolos UAB" />
               <Col md={6}>
                    <div>
                        {/* <h2>Welcome to the Biggest</h2> */}
                        {/* <h2>Creative Design Conference</h2> */}
                        <br/>
                        <Fade down duration={2000}>
                            <p>Para celebrar os 15 anos da Universidade Aberta do Brasil, estamos promovendo o <span>I SEMINÁRIO INTERPOLOS: 15 anos da UAB na Paraíba</span> visando promover reflexões sobre a formação universitária de milhares de jovens, neste contexto de século XXI .  Teremos discussões em torno de temas como  Tecnologias na Educação, Gamificação  do ensino,  Cultura digital,  Ensino híbrido, Educação Emocional e o Sistema da UAB  nos Polos da Paraíba.</p>
                        </Fade>
                        <br />
                        <Link to="/uab/about">
                            <button id="speakersBtn">SOBRE</button>
                        </Link>
                       
                    </div>
               </Col>
               <Col md={6}>
               <Fade right duration={2000}>
                    <div id="imageD">
                        <div id="ball1" />
                        <div id="ball2"/>
                        <img src={girl} alt="Foto" />
                    </div>
               </Fade>
               </Col>
           </Row>
       </Container>
       <SpecialTitle title="Abertura" subTitle="20 de Setembro" />
       <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
        <div id="features">
            <SpecialTitle title="Conteúdo" subTitle="O que você verá aqui" />
            <div>
                {/* <h2>Participe conosco</h2> */}
            </div>
            <div id="cardContainer">
                <HorizontalCard icon="la-users" title="Palestras Temáticas" description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. "/>
                <HorizontalCard icon="la-school" title="Exposições Interpolos" description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. "/>
                <HorizontalCard icon="la-tools" title="Ferramentas Tecnológicas" description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. "/>
                <HorizontalCard icon="la-music" title="Apresentações Culturais" description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. "/>
                <HorizontalCard icon="la-history" title="Diálogos e Memórias" description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. "/>
                <HorizontalCard icon="la-network-wired" title="Perspectivas Transdisciplinares" description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. "/>
            </div>
        </div>
        <SpecialTitle title="Palestrantes" subTitle="Quem Somos?" />
        <Speakers />
        <div id="scheduleMarker" />
        <SpecialTitle title="Agenda" subTitle="Programação do Evento" />
        <Schedule />
        <div className="event">
            <SpecialTitle title="O evento" subTitle="Clique no botão abaixo" />
            
            <button className="Button">
                <Link>
                    ACESSE AQUI!
                </Link>
            </button>
        </div>
        <Sponsors />
       </div>
    )
}

export default Body
