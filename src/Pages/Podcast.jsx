/* eslint-disable react/jsx-no-comment-textnodes */
import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import '../assets/css/podcast.css'
import SpecialTitle from '../Components/SpecialTitle';

function Podcast() {
    useEffect(() => {
        window.scrollTo(0, 0);

      }, []);
    return (
        <div id="podcast">
            <Container >
                <SpecialTitle title="Podcast" />
                <hr />
                {/* <h3>1° DIA</h3> */}
                <hr />
                <Row>
                    <div className="audio">
                        <h4>Titulo da palestra</h4>
                        <h5>Júnior Fideles</h5>
                        <iframe
                            className="Audio Player"
                            title="Palestra Junior Fideles"
                            frameborder="0"
                            // width="400"
                            // height="200"
                            src="https://drive.google.com/file/d/1tKZnqYvAxDjDfrriSFdH7Npl_6bFcO9z/preview">
                        </iframe>
                    </div>
                 
                </Row>
                <hr />
                {/* <h3>2° DIA</h3> */}
                <hr />
                <Row>
                    <div className="audio">
                        <h4>O lugar das Tecnologias na educação a distância</h4>
                        <h5>Ercules Laurentino Diniz</h5>
                        <iframe
                            className="Audio Player"
                            title="Ercules Laurentino Diniz"
                            frameborder="0"
                            src="https://drive.google.com/file/d/14RFJDpBa6rDrH6OzQBmuxbiHndjoGLvB/preview">
                        </iframe>
                    </div>
                    <div className="audio">
                        <h4>Aprendizagens e Vivências: muros ou pontes? A escola na vida ou a escola da vida?</h4>
                        <h5>Psicólogo Me.Gilmar de Oliveira</h5>
                        <iframe
                            className="Audio Player"
                            title="Gilmar de Oliveira"
                            frameborder="0"
                            src="https://drive.google.com/file/d/1AY6bA3FG-X6SBNExU71RfeS8iZCQAHD3/preview">
                        </iframe>
                    </div>
                    <div className="audio">
                        <h4>Não nasci na era digital, e agora, José?</h4>
                        <h5>Prof. Me. Verônica Fragoso</h5>
                        <iframe
                            className="Audio Player"
                            title="Prof. Me. Verônica Fragoso"
                            frameborder="0"
                            src="https://drive.google.com/file/d/1CVL2_BJHkDDOahPTm69kKUcGfKiqoxup/preview">
                        </iframe>
                    </div>
                   
                   
                   
                
                
                </Row>
                <hr />
                {/* <h3>3° DIA</h3> */}
                <hr />
                <Row>
                    <div className="audio">
                        <h4>O uso de tecnologia na educação com intencionalidade pedagógica</h4>
                        <h5>Prof. Me. Fernanda Gomides</h5>
                        <iframe
                            className="Audio Player"
                            title="Prof. Me. Fernanda Gomides"
                            frameborder="0"
                            src="https://drive.google.com/file/d/1kREAgbcQZWlJr13VLsaXzhLe1kQaJxOv/preview">
                        </iframe>
                    </div>
                </Row>
                <br /><br />
                <Link to="/">
                    <button id="speakersBtn">Voltar</button>
                </Link>
            </Container>
        </div>
    )
}

export default Podcast;
