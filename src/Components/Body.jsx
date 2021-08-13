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
                <SpecialTitle title="Welcome" subTitle="Creative Design Conference" />
               <Col sm={6}>
                    <div>
                        {/* <h2>Welcome to the Biggest</h2> */}
                        <h2>Creative Design Conference</h2>
                        <br/>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        <br />
                        <Link to="/about">
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
            <SpecialTitle title="Features" subTitle="What you can see here" />
            <div>
                <h2>Why you should Join Event</h2>
            </div>
            <div id="cardContainer">
                <HorizontalCard />
                <HorizontalCard />
                <HorizontalCard />
                <HorizontalCard />
                <HorizontalCard />
                <HorizontalCard />
            </div>
        </div>
        <SpecialTitle title="Speakers" subTitle="Who are us?" />
        <Speakers />
        <div id="scheduleMarker" />
        <SpecialTitle title="Agenda" subTitle="Programação da Semana" />
        <Schedule />
        <h1>ACESSE AQUI!</h1>
        <Sponsors />
       </div>
    )
}

export default Body
