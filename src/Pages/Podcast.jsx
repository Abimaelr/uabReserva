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
                <h3>1° DIA</h3>
                <hr />
                <Row>
                    <iframe title="Podcast" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1118184526&color=%23ffa500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                    <iframe title="Podcast" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1118184526&color=%23ffa500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                    <iframe title="Podcast" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1118184526&color=%23ffa500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                </Row>
                <hr />
                <h3>2° DIA</h3>
                <hr />
                <Row>
                <iframe title="Podcast" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1118184526&color=%23ffa500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                    <iframe title="Podcast" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1118184526&color=%23ffa500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                    <iframe title="Podcast" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1118184526&color=%23ffa500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                </Row>
                <hr />
                <h3>3° DIA</h3>
                <hr />
                <Row>
                    <iframe title="Podcast" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1118184526&color=%23ffa500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                    <iframe title="Podcast" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1118184526&color=%23ffa500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
                    <iframe title="Podcast" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1118184526&color=%23ffa500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
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
