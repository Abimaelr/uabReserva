import React,  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SpecialTitle from '../Components/SpecialTitle';
import '../assets/css/event.css';
import { Row, Col } from 'react-bootstrap';

function Event() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div id="event">
            <SpecialTitle title="Dia 1" />
            <Row>
                <Col sm={4}>
                    <h4><span>Titulo do Vídeo</span></h4>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                </Col>
                <Col sm={4}>
                    <h4><span>Titulo do Vídeo</span></h4>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                </Col>
                <Col  sm={4}>
                    <h4><span>Titulo do Vídeo</span></h4>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                </Col>
            </Row>
            <SpecialTitle title="Dia 2" />
            <Row>
                <Col sm={4}>
                    <h4><span>Titulo do Vídeo</span></h4>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                </Col>
                <Col sm={4}>
                    <h4><span>Titulo do Vídeo</span></h4>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                </Col>
                <Col  sm={4}>
                    <h4><span>Titulo do Vídeo</span></h4>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                </Col>
            </Row>
            <SpecialTitle title="Dia 3" />
            <Row>
                <Col sm={4}>
                    <h4><span>Titulo do Vídeo</span></h4>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                </Col>
                <Col sm={4}>
                    <h4><span>Titulo do Vídeo</span></h4>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                </Col>
                <Col  sm={4}>
                    <h4><span>Titulo do Vídeo</span></h4>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                </Col>
            </Row>
            <br />
            <br />
                <br />
                <br />
            <Link to="/">
                <button id="speakersBtn">Voltar</button>
            </Link>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Event
