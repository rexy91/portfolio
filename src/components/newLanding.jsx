import React, { Component } from 'react'

export class newLanding extends Component {
    render() {
        return (
            <div className = "ui fluid container" id = "landingPage">
                    <img style = {{marginBottom:'3%'}}
                    src = 'https://www.flaticon.com/premium-icon/icons/svg/1713/1713968.svg'
                    alt="avatar"
                    className="avatar-img"
                    />
            <div className="banner-text">
              <h2>Full Stack Web Developer</h2>
            <hr/>
            <br/>
          {/* <p>React | Redux | JavaScript | Ruby | Rails | Bootstrap | Css | Git | HTML</p> */}
        <p>Passionate about coding and problem solving. Possess strong skills in collaborating with team and pair-programming. Seeks to establish a career as Full Stack Developer and keep on learning.</p>
        
        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
        </div>
            </div>
        )
    }
}

export default newLanding
