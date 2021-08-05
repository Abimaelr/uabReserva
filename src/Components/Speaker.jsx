import React from 'react'


function Speaker(props) {
    return (
        <div className="speakerItem">
            <div className='speaker' style={{ 
                backgroundImage: `url(${props.url})` 
            }}>
                <div className="speakerInfo">
                    <h4>Abimael Rocha</h4>
                    <h5>Desenvolvedor Front-End</h5>
                    <br />
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                    <div className="speakerContact">
                        {props.ig ? 
                            <a href={props.ig}>
                                <i class="lab la-instagram" /> 
                            </a>
                        : null }
                        {props.linkedin ?
                            <a href={props.linkedin}>
                                <i class="lab la-linkedin" /> 
                            </a>
                        : null}
                        {props.email ? 
                            <a href={props.email}>
                                <i class="las la-envelope-open"/> 
                            </a>
                        : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speaker;
