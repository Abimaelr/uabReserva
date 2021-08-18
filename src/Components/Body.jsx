import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import HorizontalCard from './HorizontalCard';
import '../assets/css/body.css';
import Speakers from './Speakers';
import SpecialTitle from './SpecialTitle';
import Sponsors from './Sponsors';
import Schedule from './Schedule';
import girl from '../assets/img/m.png';

function Body() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
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
                        <p>Para celebrar os 15 anos da Universidade Aberta do Brasil, estamos promovendo o <span>I SEMINÁRIO INTERPOLOS: 15 anos da UAB na Paraíba</span> visando promover reflexões sobre a formação universitária de milhares de jovens, neste contexto de século XXI .  Teremos discussões em torno de temas como  Tecnologias na Educação, Gamificação  do ensino,  Cultura digital,  Ensino híbrido, Educação Emocional e o Sistema da UAB  nos Polos da Paraíba.</p>
                        <br />
                        <Link to="/uab/about">
                            <button id="speakersBtn">SOBRE</button>
                        </Link>
                       
                    </div>
               </Col>
               <Col md={6}>
               <div id="imageD">
                    <img src={girl} alt="Foto" />
               </div>
               </Col>
           </Row>
       </Container>
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
        <h1>ACESSE AQUI!</h1>
        <Sponsors />
       </div>
    )
}

export default Body
