import React from 'react';
import Slide from 'react-reveal/Slide';

function SpecialTitle(props) {
    return (
        <div className={`${props.class} titleHead`}>
            <Slide right duration={800}>
                <div className="backgroundTitle">
                    <h2>{props.title}</h2>
                </div>
            </Slide>
        <h3>{props.subTitle}</h3>
    </div>
    )
}

export default SpecialTitle
