import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../assets/css/footer.css'
import ifpb from '../assets/img/if.png';
import jp from '../assets/img/jp.png';
import ufpb from '../assets/img/uf.png';

function Footer() {
    return (
        <Container fluid  id="footer">
            <Row>
                <Col xs={8} sm={6}>
                    <div className="icons">
                        <p>Promovido por: </p>
                        <img src={jp} alt="João Pessoa Logo" />
                    </div>
                </Col>
                <Col xs={8} sm={6}>
                    <div className="icons">
                        <p>Apoiado por: </p>
                        <img id="ufpb" src={ufpb} alt="UFPB Logo" />
                        <img id="if" src={ifpb} alt="IFPB Logo" />
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
