import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../assets/css/footer.css'
import ifpb from '../assets/img/if.png';
import jp from '../assets/img/jp.png';
import ufpb from '../assets/img/uf.png';
import sedec from '../assets/img/sedec.png';

function Footer() {
    return (
        <Container fluid  id="footer">
            <Row>
                <a className="link" target="_blank" href="mailto:seminariouab15@gmail.com" rel="noreferrer">
                <p>&#9993; seminariouab15@gmail.com</p></a>
            </Row>
            <Row>
                <Col xs={8} sm={4}>
                    <div className="icons">
                        <p>Apoiado por: </p>
                        <img id="ufpb" src={ufpb} alt="UFPB Logo" />
                        <img id="if" src={ifpb} alt="IFPB Logo" />
                    </div>
                </Col>
                <Col xs={8} sm={4}>
                    <img src={sedec} alt="Sedec" className="sedec" srcset="" />
                </Col>
                <Col xs={8} sm={4}>
                    <div className="icons">
                        <p>Promovido por: </p>
                        <img src={jp} alt="João Pessoa Logo" />
                    </div>
                </Col>
            </Row>
            <Row>
                <p>Feito com <i class="las la-heart" /> por servidores públicos</p>
            </Row>
        </Container>
    )
}

export default Footer
