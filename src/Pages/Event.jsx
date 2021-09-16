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
                <Col md={12}>
                    <div className="video">
                        <h4>Abertura - Conferência 1: 15 anos da UAB na Paraíba: Conquistas e Desafios</h4>
                        <h5>Dr. Lucídio dos Anjos Formiga Cabral</h5>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />

                    </div>
                </Col>

            </Row>
            <SpecialTitle title="Dia 2" />
            <Row>
                <Col md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>O papel da educação e o uso das tecnologias de maneira crítica e reflexiva na EaD</h4>
                            <h5>Profa. Daniele Dias</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>O lugar das Tecnologias na educação a distância: buscando o equilíbrio entre o otimismo ingênuo e a resistência hesitante</h4>
                            <h5>Prof. Me. Ercules Laurentino Diniz</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
                <Col  md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>Aprendizagens e Vivências: muros ou pontes? A escola na vida ou a escola da vida?</h4>
                            <h5>Me.Gilmar de Oliveira</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>Não nasci na era digital, e agora, José?
</h4>
                            <h5>Prof. Me. Verônica Fragoso</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
            </Row>
            <SpecialTitle title="Dia 3" />
            <Row>
                <Col md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>Gamificação no ensino e as tecnologias que auxiliam a aprendizagem de milhares de jovens</h4>
                            <h5>Prof. Me. Priscila Dias</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
                <Col md={4}>
                <div className="video">
                        <div className="titleVideo">
                            <h4>Educação emocional: um novo paradigma pedagógico?
</h4>
                            <h5>Prof. Me. Júnior Fideles</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
                <Col md={4}>
                <div className="video">
                        <div className="titleVideo">
                            <h4>O uso de tecnologia na educação com intencionalidade pedagógica
</h4>
                            <h5>Prof. Me. Fernanda Gomides</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
                <Col  md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>Exposição 1: As Conquistas e os desafios dos Polos na Paraíba 

</h4>
                            <h5>Coordenadores de Polo</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
                <Col  md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>Exposição 2: As Conquistas e os desafios dos Polos na Paraíba

</h4>
                            <h5>Assistentes e Tutores dos Polos UAB-PB</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
                <Col  md={4}>
                    <div className="video">
                        <div className="titleVideo">
                            <h4>Conferência 2: Relações de saber, poder e inclusão na educação à distância: uma análise sobre a UAB.

</h4>
                            <h5>Prof. Daniel Mill</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
                </Col>
                <Col md={12}>
                <div className="video">
                        <div className="titleVideo">
                            <h4>ENCERRAMENTO</h4>
                            <h5>Apresentação Cultural e homenagem dos Polos aos 15 anos da UAB</h5>
                        </div>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
                    </div>
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
