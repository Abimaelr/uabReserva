import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas'
import '../assets/css/schedule.css';


function OffCanvasElement(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="light" onClick={handleShow} className="me-2">
          Saiba mais
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{props.Title}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {props.children}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

function Schedule() {
    return (
        <div id='schedule'>
            <div class="bg-image"></div>
            <div className="schedule">
                <h3>DIA 1</h3>
                <h4>20 de Setembro</h4>
                <ul>
                    <li>atividade</li>
                    <li>atividade</li>
                    <li>atividade</li>
                    <li>atividade</li>
                </ul>
                <OffCanvasElement> 
                    <h2>IOAOSIIOAS</h2>
                </OffCanvasElement>
            </div>
            <div className="schedule">
                <h3>DIA 2</h3>
                <h4>21 de Setembro</h4>
                <ul>
                    <li>atividade</li>
                    <li>atividade</li>
                    <li>atividade</li>
                    <li>atividade</li>
                </ul>
            </div>
            <div className="schedule">
                <h3>DIA 3</h3>
                <h4>22 de Setembro</h4>
                <ul>
                    <li>atividade</li>
                    <li>atividade</li>
                    <li>atividade</li>
                    <li>atividade</li>
                </ul>
            </div>
        </div>
    )
}

export default Schedule
