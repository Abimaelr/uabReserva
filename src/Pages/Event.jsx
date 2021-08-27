import React,  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SpecialTitle from '../Components/SpecialTitle';
import '../assets/css/event.css';

function Event() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div id="event">
            <SpecialTitle title="Dia 1" />
            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
            <SpecialTitle title="Dia 2" />
            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
            <SpecialTitle title="Dia 3" />
            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/gvjWQUXUjo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" />
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
