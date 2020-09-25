import React, { Component } from 'react';
import './AboutPageRedo.css'

class AboutPageRedo extends Component {
    render() {
        return (
            <div id='aboutPage'>
                <div className='Title' style={{paddingTop:'50px'}}>
                    
                        <span id='aboutTitle'><span id='about'> About  </span><span id='me' >Me</span></span>
                </div>
                <div id='bio'>
                <p>Full-stack developer based in New York City. I have a passion for building full-stack responsive web applications. Experienced in Ruby on Rails, JavaScript, React and Redux based programming and a background in computer science. Pursued a Bachelor of Science degree in Computer Science, and a recent graduate of Flatiron School for the full-stack web development program.</p>
                </div>
            <div id='skills'>
                 <p id='tech-title'>Tech Skills</p>
                 <div id='skill-icon-div'>
                 <img className='skill-icons' src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSItMjcgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTAgMCA0NC4yNjU2MjUgNDYxLjUgMTg2LjQ4MDQ2OSA1MC41IDE4My44NDM3NS01MC41IDQ0LjI2NTYyNS00NjEuNXptMCAwIiBmaWxsPSIjZmQ5ODJjIi8+PHBhdGggZD0ibTIzMC43NDYwOTQgMHY1MTJsMTgzLjg0Mzc1LTUwLjUgNDQuMjY1NjI1LTQ2MS41em0wIDAiIGZpbGw9IiNmYTUwMmUiLz48cGF0aCBkPSJtMzY3LjE3MTg3NSAxNTkuMzc4OTA2LTE5NS44NTkzNzUtLjAwMzkwNiAzLjI3NzM0NCAzNS44MjgxMjVoMTkxLjY1MjM0NGwtMTUuNDg4MjgyIDIwMC4xOTE0MDYtMTIwLjE3MTg3NSAzNC45NTMxMjUtMTI4Ljk4NDM3NS00MC4xMTcxODd2LTgxLjE4MzU5NGg4MC4xMjV2MjQuMTc5Njg3bDQ4Ljg3NSAxNS4xMDE1NjMgNDYuMzA4NTk0LTE1LjExMzI4MSAzLjM3MTA5NC01OS45NDE0MDZoLTE3Ny40Mzc1bC0yMC4wMzEyNS0xOTAuOTY0ODQ0aDI4NC4zNjMyODF6bTAgMCIgZmlsbD0iI2ZmZiIvPjxnIGZpbGw9IiNkZWVjZjEiPjxwYXRoIGQ9Im0yMzAuNzQ2MDk0IDgyLjMwODU5NGgxMzYuNDI1Nzgxdjc3LjA3MDMxMmgtMTM2LjQyNTc4MXptMCAwIi8+PHBhdGggZD0ibTI4MC4yNzczNDQgMjczLjI3MzQzOC0zLjM3MTA5NCA1OS45NDE0MDYtNDYuMTYwMTU2IDE1LjA2NjQwNnY4Mi4wMTk1MzFsMTIwLjAwNzgxMi0zNC45MDYyNSAxNS40ODgyODItMjAwLjE5MTQwNmgtMTM1LjQ5NjA5NHY3OC4wNzAzMTN6bTAgMCIvPjwvZz48L3N2Zz4=" />
                 <img className='skill-icons' src="https://cdn.iconscout.com/icon/free/png-512/css-118-569410.png" alt=""/>
                 <img className='skill-icons' src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" alt=""/>
                 <img className='skill-icons' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png" alt=""/>
                 <img className='skill-icons' src="https://community.cdn.kony.com/sites/default/files/logo-redux.png" alt=""/>
                 <br/>
                 <div className='backend-skills'>
                 <img className='skill-icons' src="https://download.logo.wine/logo/Ruby_on_Rails/Ruby_on_Rails-Logo.wine.png" alt=""/>
                 <img className='skill-icons' src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" alt=""/>
                 <img className='skill-icons' src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" alt=""/>
                 <img id='postgre'style={{paddingLeft:'32px'}}  className='skill-icons' src="https://cdn.iconscout.com/icon/free/png-512/postgresql-11-1175122.png" alt=""/>
                 <img id='mongo'style={{paddingLeft:'25px'}}  className='skill-icons' src="https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png" alt=""/>
                 </div>
                 </div>
            </div>  

        </div>  
            
        );
    }
}

export default AboutPageRedo;