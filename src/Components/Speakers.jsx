import React from 'react';
import Speaker from './Speaker';
import Fade from 'react-reveal/Fade'
import '../assets/css/speaker.css'
import priscila from '../assets/img/Priscila.png';
import gilmar from '../assets/img/Gilmar.png';
import fernanda from '../assets/img/Fernanda.png';
import ercules from '../assets/img/Ercules.png';
import daniele from '../assets/img/Daniele.png';

function Speakers() {
    return (
        <>
        <Fade left>
            <div id="speakerContent">
                <Speaker
                    url={priscila}
                    name="Priscila Dias"
                    title="Empreendedora Digital"
                    description="lorem..."
                    // ig="https://google.com"
                />
                 <Speaker
                    url={gilmar}
                    name="Gilmar Oliveira"
                    title="Mestre em Aprendizagem"
                    description="Psicólogo, Neuropsicólogo, Psicopedagogo, especialista e mestre em Aprendizagem. Atua em clínica e escolas. Consultor educacional e professor universitário."
                    // ig="https://google.com"
                />
                <Speaker
                    url={fernanda}
                    name="Fernanda Gomides"
                    title="Professora"
                    description="Consultora Educacional no uso de tecnologia. Mestre em Educação e doutoranda em Educação pela UFPB/PPGE."
                    // ig="https://google.com"
                />
                <Speaker
                    url={ercules}
                    name="Ercules Diniz"
                    title="Professor"
                    description="Mestre e Doutorando em Educação pelo PPGE/UFPB. Bacharel e Licenciado em Ciências Biológicas pela UFPB."
                    // ig="https://google.com"
                />
                <Speaker
                    url={daniele}
                    name="Daniele Dias"
                    title="Professora"
                    description="lorem..."
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
