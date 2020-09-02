import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import landingicon from '../projectPhotos/landingicon.jpg'
// import profilePhoto from '../projectPhotos/proilePic.jpg'

export class newLanding extends Component {
    render() {
        return (
            <div className = "ui fluid container" id = "landingPage" >
            <div className="banner-text" id='landingText'>
            <img style = {{marginBottom:'3%'}}
                    // src = 'https://www.flaticon.com/premium-icon/icons/svg/1713/1713968.svg'
                    src = {landingicon}
                    alt="avatar"
                    className="avatar-img"
                    />
              <h2>Full Stack Web Developer</h2>
            <hr/>
            <br/>
          {/* <p>React | Redux | JavaScript | Ruby | Rails | Bootstrap | Css | Git | HTML</p> */}
        <p>Passionate about coding and problem solving. Possess strong skills in collaborating with team and pair-programming.<br/> Seeks opportunities with room to grow.</p>
        {/* <p>Passionate about coding and problem solving. Possess strong skills in collaborating with team and pair-programming. Seeks to establish opportunities to keep on learning.</p> */}
        
        <div className="social-links">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/rex-ye-b58703193/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" data-tip data-for="linkIn" />
          </a>
          <ReactTooltip id='linkIn'>
              <span>linkIn Profile</span>
          </ReactTooltip>

          {/* Github */}
          <a href="https://github.com/rexy91" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" data-tip data-for="github"/>
          </a>
          <ReactTooltip id='github'>
              <span>Github Profile</span>
          </ReactTooltip>

          {/* Freecodecamp */}

          <a href="https://www.instagram.com/yuhoick/?hl=enm" rel="noopener noreferrer" target="_blank">
            <i className="fa fab fa-instagram" aria-hidden="true" data-tip data-for ="instagram"/>
          </a>
          <ReactTooltip id='instagram'>
              <span>instagram</span>
          </ReactTooltip>

          {/* Medium */}
          <a href="https://medium.com/@rxye91" rel="noopener noreferrer" target="_blank" >
            <i className="fa fab fa-medium" aria-hidden="true" data-tip data-for ='mediumIcon'/>
          </a>
          <ReactTooltip id='mediumIcon'>
              <span>Medium Profile</span>
          </ReactTooltip>
        </div>
        </div>
            </div>
        )
    }
}

export default newLanding
