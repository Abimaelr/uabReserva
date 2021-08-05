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
                        <a href="">
                            <i class="lab la-instagram"></i>
                        </a>
                        <a href="">
                        <i class="lab la-linkedin"></i>
                        </a>
                        <a href="">
                            <i class="las la-envelope-open"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speaker;
