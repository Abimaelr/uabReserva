import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import HorizontalCard from './HorizontalCard';
import '../assets/css/body.css';
import Speakers from './Speakers';
import SpecialTitle from './SpecialTitle';
import Sponsors from './Sponsors';
import Schedule from './Schedule';

function Body() {
    return (
       <div id="content">
       <Container >
           <br />
           <Row>
                <SpecialTitle title="Bem vindos" subTitle="I Seminário Interpolos UAB" />
               <Col sm={6}>
                    <div>
                        {/* <h2>Welcome to the Biggest</h2> */}
                        {/* <h2>Creative Design Conference</h2> */}
                        <br/>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        <br />
                        <Link to="/uab/about">
                            <button id="speakersBtn">SOBRE</button>
                        </Link>
                       
                    </div>
               </Col>
               <Col>
               <div id="imageD">
                    <div id="img1"/>
                    <div id="img2"/>
                    <div id="img3"/>
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
                <HorizontalCard icon="la-music" title="Apresentação Cultural" description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. "/>
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
