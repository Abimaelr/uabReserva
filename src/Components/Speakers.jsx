import React from 'react';
import Speaker from './Speaker';
import Fade from 'react-reveal/Fade'
import '../assets/css/speaker.css'
import priscila from '../assets/img/Priscila.png';
import gilmar from '../assets/img/Gilmar.png';
import fernanda from '../assets/img/Fernanda.png';
import ercules from '../assets/img/Ercules.png';
import daniele from '../assets/img/Daniele.png';
import lucidio from '../assets/img/Lucidio.png';
import junior from '../assets/img/Junior.png';
import veronica from '../assets/img/veronica.png';
import daniel from '../assets/img/Daniel.png';

function Speakers() {
    return (
        <>
        <Fade left>
            <div id="speakerContent">
                <Speaker
                    url={lucidio}
                    name="Lucídio dos Anjos"
                    title="Professor"
                    description="Bacharel em Ciência da Computação (UFC), Mestre em Engenharia de Sistemas e Computação (UFRJ), Doutor em Engenharia de Sistemas e Computação (UFRJ). Professor Titular da Universidade Federal da Paraíba."
                    // ig="https://google.com"
                /> 
                <Speaker
                    url={daniele}
                    name="Daniele Dias"
                    title="Professora"
                    description="Pedagoga, Mestra e Doutora em Educação. Pesquisadora na Área de Tecnologias Educacionais, Aprendizagem e Formação Docente, vinculada ao Depto de Metodologia da Educação/CE da UFPB."
                    // ig="https://google.com"
                />
                <Speaker
                    url={ercules}
                    name="Ercules Diniz"
                    title="Professor"
                    description="Mestre e Doutorando em Educação pelo UFPB/PPGE. Bacharel e Licenciado em Ciências Biológicas pela UFPB."
                    // ig="https://google.com"
                />
                 <Speaker
                    url={gilmar}
                    name="Gilmar Oliveira"
                    title="Professor"
                    description="Psicólogo, Neuropsicólogo, Psicopedagogo, especialista e mestre em Aprendizagem. Atua em clínica e escolas. Consultor educacional e professor universitário."
                    // ig="https://google.com"
                />
                <Speaker
                    url={veronica}
                    name="Verônica Fragoso"
                    title="Professora"
                    description="Pedagoga, Historiadora, Mestra em Educação e mestranda em Educação Tecnológica."
                    // ig="https://google.com"
                />
                <Speaker
                    url={priscila}
                    name="Priscila Dias"
                    title="Professora"
                    description="Pedagoga, Mestra em educação e Desenhista Educacional para EaD. Atua como Chefe da Divisão de Formação e Eventos Digitais da SEDEC/JP."
                    // ig="https://google.com"
                />
                <Speaker
                    url={junior}
                    name="Junior Fideles"
                    title="Professor"
                    description="Mestre em Ciencias de la Educación. Pós-Graduação em Educação Inclusiva e Pós-Graduação em Psicopedagogia Institucional e Clínica."
                    // ig="https://google.com"
                />
                <Speaker
                    url={fernanda}
                    name="Fernanda Gomides"
                    title="Professora"
                    description=" Mestra em Educação e doutoranda em Educação pelo UFPB/PPGE. Consultora Educacional no uso de tecnologia."
                    // ig="https://google.com"
                />
                <Speaker
                    url={daniel}
                    name="Daniel Mill"
                    title="Professor"
                    description="Doutor em Educação e Professor Líder do Grupo Horizonte (Grupo de Estudos e Pesquisas sobre Inovação em Educação, Tecnologias e Linguagens) da Universidade Federal de São Carlos (UFSCar)"
                    // ig="https://google.com"
                />                  
            </div>
            <div id="speakerContent">
            </div>
        </Fade>
        </>
    )
}

export default Speakers;
