import React, { Component } from 'react';
import './NewProjectCard.css'
import Bankimg from './bank.jpg'
import yourteamtimeImg from './yourteamtime.jpg'
import ticketfinderImg from './ticketfinder2.jpg'

class NewProjectCard extends Component {
    state = {
        bankTechStack: false,
        yourTeamTimeTechStack:false,
        ticketFinder:false

    }

    toggleBankFlip = () => {
        this.setState({
            bankTechStack: !this.state.toggleTechstack
        })
    }

    renderBankDescription = () => {
        if(this.state.bankTechStack === false) {
            return(
                <div>
                <h3>Flatiron Virtual Bank</h3>
                <div className="text">A full-stack web based banking application using React and Rails, allows users to sign up for a virtual bank account and perform some transactions, such as transfering funds, making deposit and withdrawal.</div>
                </div>
            )
        }
        else if(this.state.bankTechStack === true){
                return(
                    <div className='tech-stack'>
                            <div>
                                    <div className='columns'><button>React</button></div>
                                    <div className='columns'><button>Redux</button></div>
                                    <div className='columns'><button>Semantic UI</button></div>
                                    <div className='columns'><button>Chart JS</button></div>

                            </div>
                            <div>
                                    <div className='columns'><button>Ruby On Rails</button></div>
                                    <div className='columns'><button>Action Mailer</button></div>
                                    <div className='columns'><button>PostgreSQL</button></div> 
                                    <div className='columns'><button>JWT Auth</button></div> 

                            </div>
                    </div>
                )
        }
    }

    renderTeamtimeDescription = () => {

        if(this.state.toggleTechstack === false) {
            return(
                <div>
                <h3>Your Team's Time</h3>
                <div className="text">Web application designed to be used by managers. A manager will be able to add/delete companies and employees, create a weekly schedule for the employees which belongs to a particular company that they manage.</div>
                </div>
            )
        }
        else if(this.state.toggleTechstack === true){
                return(
                    <div className='tech-stack'>
                            <div>
                                    <div className='columns'><button>React</button></div>
                                    <div className='columns'><button>JavaScript</button></div>
                                    <div className='columns'><button>React Spreadsheet</button></div>
                                    <div className='columns'><button>Sweet Alert</button></div>

                            </div>
                            <div>
                                    <div className='columns'><button>Ruby On Rails</button></div>
                                    <div className='columns'><button>PostgreSQL</button></div> 
                                    <div className='columns'><button>JWT Auth</button></div> 
                            </div>
                    </div>
                )
        }
    }

    renderTicketfinderDescription = () => {

        if(this.state.toggleTechstack === false) {
            return(
                <div>
                <h3>Ticket Finder </h3>
                <div className="text">Full-stack application with asynchronous fetches, external API using JavaScript, HTML, and Css. Users can browse upcoming events and add to their personal planner.</div>
                </div>
            )
        }
        else if(this.state.toggleTechstack === true){
                return(
                    <div className='tech-stack'>
                            <div>
                                    <div className='columns'><button>JavaScript</button></div>
                                    <div className='columns'><button>Ticket Master API</button></div>
                            </div>
                            <div>
                                    <div className='columns'><button>Ruby On Rails</button></div>
                                    <div className='columns'><button>PostgreSQL</button></div> 
                            </div>
                    </div>
                )
        }
    }
    

    render() {
        console.log(this.state.toggleTechstack)

        return (
            <div>
                    <p id='project-title'>My Projects</p>
                    <div className="blog-card" id='project1-card' >
                        <div className="inner-part">
                            <label className= 'img'>
                                <img className='img-1' src={Bankimg}/>
                            </label>
                            <div className="content content-1">
                                {this.renderBankDescription()}
                            <button onClick={this.toggleBankFlip} className='project-buttons' type='submit'>{this.state.toggleTechstack ? 'Description' : 'Tech Stack'}</button>
                                <button className='project-buttons' type='submit'>Live Demo</button>
                                <button className='project-buttons' type='submit'>Github Repo</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="blog-card" id='project2-card'>
                        <div className="inner-part">
                            <label className= 'img'>
                                <img className='img-1' src={yourteamtimeImg}/>
                            </label>
                            <div className="content content-1">
                                {this.renderTeamtimeDescription()}
                            <button onClick={this.toggleFlip} className='project-buttons' type='submit'>{this.state.toggleTechstack ? 'Description' : 'Tech Stack'}</button>
                                <button className='project-buttons' type='submit'>Live Demo</button>
                                <button className='project-buttons' type='submit'>Github Repo</button>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card" id='project3-card'>
                        <div className="inner-part">
                            <label className= 'img'>
                                <img className='img-1' src={ticketfinderImg}/>
                            </label>
                            <div className="content content-1">
                                {this.renderTicketfinderDescription()}
                            <button onClick={this.toggleFlip} className='project-buttons' type='submit'>{this.state.toggleTechstack ? 'Description' : 'Tech Stack'}</button>
                                <button className='project-buttons' type='submit'>Live Demo</button>
                                <button className='project-buttons' type='submit'>Github Repo</button>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}

export default NewProjectCard;