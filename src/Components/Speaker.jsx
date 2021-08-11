import React from 'react'


function Speaker(props) {
    return (
        <div className="speakerItem">
            <div className='speaker' style={{ 
                backgroundImage: `url(${props.url})` 
            }}>
                <div className="speakerInfo">
                    <h4>{props.name}</h4>
                    <h5>{props.title}</h5>
                    <br />
                    <p>{props.description}</p>
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
