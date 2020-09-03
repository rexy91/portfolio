import React, { Component } from 'react'
import './ProjectCard.css'
import {withRouter} from 'react-router-dom'

import Bankimg from '../../projectPhotos/bank.jpg'
import mod3photo from '../../projectPhotos/ticketfinder2.jpg'
import mod2photo from '../../projectPhotos/yourteamtime.jpg'

class ProjectCard extends Component {

    openLink = (e) => {
        console.log(e.target.name)
        const bankGithub = "https://github.com/rexy91/FlatironVirtualBankfront"
        const bankWebsite = "https://flatironvirtualbank.netlify.com/"
        const HrGithub = "https://github.com/rexy91/mod4projectHR-frontend"
        const HrWebsite = "https://yourteamtime.netlify.com/"
        const ticketfinderGithub = "https://github.com/rexy91/TicketFinderfrontend"
        const ticketfinderWebsite = "https://ticketfinderfrontend.herokuapp.com/"
    
        if(e.target.name === 'bank' && e.target.innerText === 'Github Repo'){
          window.open(`${bankGithub}`);}
        else if (e.target.name === 'bank' && e.target.innerText === 'Live Demo')
        {
          window.open(`${bankWebsite}`)
        }
        else if (e.target.name === 'hr' && e.target.innerText === 'Github Repo'){
          window.open(`${HrGithub}`)
        }
        else if (e.target.name ==='hr' && e.target.innerText === 'Live Demo'){
          window.open(`${HrWebsite}`)
        }
        else if (e.target.name ==='ticketfinder' && e.target.innerText ==='Github Repo'){
          window.open(`${ticketfinderGithub}`)
        }
        else if (e.target.name ==='ticketfinder' && e.target.innerText ==='Live Demo'){
          window.open(`${ticketfinderWebsite}`)
        }
      }
    render() {
        return (
            <div className='project-card-container'>
                <div className='project-card'>
                            <div className='card-image'>
                                    <img src={Bankimg} alt=""/>
                            </div>

                            <div className="card-text"> 
                                <h3>Flatiron Virtual Bank</h3>
                                <p>A full-stack web based banking application using React and Rails, allows users to sign up for a virtual bank account and perform some transactions, such as transfering funds, making deposit and withdrawal.</p>
                            </div>

                            <div className="card-buttons">
                                        <button name='bank' onClick={this.openLink}>Live Demo</button>
                                        <button name='bank' onClick={this.openLink}>Github Repo</button>
                            </div>
                </div>

                <div className='project-card'>
                            <div className='card-image'>
                                    <img src={mod3photo} alt=""/>
                            </div>

                            <div className="card-text"> 
                                <h3>Ticket Finder</h3>
                                <p>Built a full-stack application with asynchronous fetches, external API using JavaScript, HTML, and Css. Users can browse upcoming events and add to their personal planner.</p>
                            </div>

                            <div className="card-buttons">
                                        <button name='ticketfinder' onClick={this.openLink} >Live Demo</button>
                                        <button name='ticketfinder' onClick={this.openLink} >Github Repo</button>
                            </div>
                </div>

                <div className='project-card'>
                            <div className='card-image'>
                                    <img src={mod2photo} alt=""/>
                            </div>

                            <div className="card-text"> 
                                <h3>Your team's Time</h3>
                                <p>Full-stack web application designed to be used by managers. A manager will be able to add/delete companies and employees, create a weekly schedule for the employees which belongs to a particular company that they manage.</p>
                            </div>

                            <div className="card-buttons">
                                        <button name='hr' onClick={this.openLink} >Live Demo</button>
                                        <button name='hr' onClick={this.openLink} >Github Repo</button>
                            </div>
                </div>

                {/* <div className="project-description">
                        <h4 div='frontend-tools'>Frontend:</h4>
                        <ul>
                            <li>sjfjsdfjds</li>
                            <li>sjfjsdfjds</li>
                            <li>sjfjsdfjds</li>
                            <li>sjfjsdfjds</li>
                        </ul>
                        <h4 div='backend-tools'>Backend:</h4>
                        <ul>
                            <li>sjfjsdfjds</li>
                            <li>sjfjsdfjds</li>
                            <li>sjfjsdfjds</li>
                            <li>sjfjsdfjds</li>
                        </ul>
                </div> */}
            </div>
        )
    }
}


export default withRouter(ProjectCard)