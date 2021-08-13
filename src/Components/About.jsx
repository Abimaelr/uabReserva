import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import SpecialTitle from './SpecialTitle';
import '../assets/css/about.css';

function About() {
    return (
        <div id="about">
            <Container fluid="sm">
                <Row>
                    <SpecialTitle title="Sobre" subTitle="Nossa História" />
                    <Col sm={12}>
                            <p>
                                Nos últimos anos, a Educação a Distância tem se expandido
                                significativamente na sociedade, trazendo grandes benefícios tecnológicos e
                                científicos, com transformações visíveis para todo o planeta.
                                No Brasil, o reconhecimento da EaD como modalidade de ensino é
                                estabelecido no parágrafo primeiro, do artigo 80, da Lei de Diretrizes e Bases
                                para Educação Nacional (LDB 9.394/96), orientando a sua oferta por instituições
                                especificamente credenciadas pela União, a ser organizada com abertura e
                                regimes especiais. Tal normativa impulsionou o desenvolvimento e a veiculação
                                de programas em EaD, em todos os níveis, favorecendo não só a chegada do
                                ensino a distância em todo território nacional, mas, ganhando a atenção
                                necessária para implementação de um novo processo de ensino e de
                                aprendizagem, por meio das tecnologias digitais, caracterizado pela separação
                                física (espaço-tempo) entre discente e docente.<br/><br/>
                                A partir dessa base legal, surgem os avanços na legislação e
                                regulamentação brasileira para a EaD, a exemplo do Plano Nacional de
                                Educação (PNE) e do Decreto 5622 de 2005, em que o Governo Federal dá
                                início à criação e implementação do Sistema de Universidade Aberta do Brasil
                                (UAB), sob a justificativa da democratização da educação e do conhecimento.<br/>
                                O Sistema de UAB trata-se de uma grande parceria pública nas três
                                esferas governamentais (federal, estadual e municipal), que conta com a
                                participação das Instituições de Ensino Superior (IES) públicas e demais
                                instituições interessadas. <br/><br/> Na Paraíba, dentre as inúmeras IES parceiras do
                                Programa de Formação em nível Superior da UAB, destacamos a Universidade
                                Federal da Paraíba (UFPB) e o Instituto Federal da Paraíba (IFPB) como as
                                grandes referências , ao longo de todo processo de implementação da UAB em
                                nosso Estado, com o objetivo de expandir e interiorizar a oferta de cursos, bem
                                como ampliar o acesso e estimular a criação de Centros de Formação 
                                permanentes, por meio de Polos de Apoio Presencial, conveniados aos Estados
                                e Municípios.
                                <br/><br/>
                                Historicamente, o ensino a distância no Brasil surgiu como uma
                                modalidade decorrente da necessidade de oportunizar cursos para estudantes
                                que, por inúmeras razões, não podiam realizá-los de forma presencial. No início
                                de sua implementação, em 2008, a UAB chegou a contar com a articulação de
                                mais de 100 IES e, aproximadamente, 800 Polos de Apoio Presencial,
                                implementados e mantidos por municípios e/ou estados. Neste ano, a UAB
                                completa seus 15 anos e, atualmente, mantem-se presente em mais de 850
                                munícipios, 890 Polos de Apoio Presencial e com a articulação de mais de 133
                                IES, atendendo mais de 121 mil alunos matriculados. São números bastante
                                significativos, que fazem da UAB uma experiência singular e importante na
                                história da educação brasileira. 
                            </p>
                    </Col>
                </Row>
                <Row>
                <Link to="/uab">
                            <button id="speakersBtn">Voltar</button>
                        </Link>
                </Row>
            </Container>
        </div>
    )
}

export default About;
