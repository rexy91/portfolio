import React, { Component } from 'react';
import './LandingRedo.css'
import ReactTooltip from 'react-tooltip'

class LandingRedo extends Component {
    render() {
        return (
            
            <div className='landing-page' id='main'>
                    <div className='main-page-content'> 
                            <div id='header'>
                                    <h4>Full-Stack Developer</h4>
                            </div>
                            <p>Passionate about coding and problem solving. <br/>Possess strong skills in collaborating with team and pair-programming.<br/>
                             Seeks opportunities with room to grow.</p>
                    </div>
                    <div className='social-links'>
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/rex-ye-b58703193/" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true" data-tip data-for="linkIn" />
                            </a>
                            <ReactTooltip id='linkIn'>
                                <span>linkIn Profile</span>
                            </ReactTooltip>

                            {/* Github */}
                            <a href="https://github.com/rexy91" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-github" aria-hidden="true" data-tip data-for="github"/>
                            </a>
                            <ReactTooltip id='github'>
                                <span>Github Profile</span>
                            </ReactTooltip>

                            {/* Freecodecamp */}

                            <a href="https://www.instagram.com/yuhoick/?hl=enm" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-instagram" aria-hidden="true" data-tip data-for ="instagram"/>
                            </a>
                            <ReactTooltip id='instagram'>
                                <span>instagram</span>
                            </ReactTooltip>

                            {/* Medium */}
                            <a href="https://medium.com/@rxye91" rel="noopener noreferrer" target="_blank" >
                                <i className="fab fa-medium" aria-hidden="true" data-tip data-for ='mediumIcon'/>
                            </a>
                            <ReactTooltip id='mediumIcon'>
                                <span>Medium Profile</span>
                            </ReactTooltip>
                     </div>
            </div>
        
        );
    }
}

export default LandingRedo;