import React, { Component } from 'react';
import './NewProjectCard.css'
import Bankimg from './bank.jpg'
import yourteamtimeImg from './yourteamtime.jpg'
import ticketfinderImg from './ticketfinder2.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

class NewProjectCard extends Component {
    state = {
        bankTechStack: false,
        yourTeamTimeTechStack:false,
        ticketFinderStack:false
    }

    componentDidMount(){
        AOS.init({duration:3000})
    }

    // grabing element
    toggleBankMouseEnter = () => {
        this.setState({
            bankTechStack: true
        })
    }

    toggleBankMouseLeave = () => {
        this.setState({
            bankTechStack: false
        })
    }

    toggleTeamMouesEnter = () => {
        
        this.setState({
            yourTeamTimeTechStack: true
        })
        
    }
    toggleTeamMouseLeave = () => {
        
        this.setState({
            yourTeamTimeTechStack: false
        })
        
    }

    toggleTicketMouseEnter = () => {
        this.setState({
            ticketFinderStack: true
        })
    }

    toggleTicketMouseLeave = () => {
        this.setState({
            ticketFinderStack: false
        })
    }

    toggleTickerFlip = () => {
        
        this.setState({
            ticketFinderStack: !this.state.ticketFinderStack
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

        if(this.state.yourTeamTimeTechStack === false) {
            return(
                <div>
                <h3>Your Team's Time</h3>
                <div className="text">Web application designed to be used by managers. A manager will be able to add/delete companies and employees, create a weekly schedule for the employees which belongs to a particular company that they manage.</div>
                </div>
            )
        }
        else if(this.state.yourTeamTimeTechStack === true){
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

        if(this.state.ticketFinderStack === false) {
            return(
                <div>
                <h3>Ticket Finder </h3>
                <div className="text">Full-stack application with asynchronous fetches, external API using JavaScript, HTML, and Css. Users can browse upcoming events and add to their personal planner.</div>
                </div>
            )
        }

        else if(this.state.ticketFinderStack === true){
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

        return (
            <div id='project-div'>
                    <p id='project-title' data-aos='fade-up'>My Projects</p>
                    <div className="blog-card" id='project1-card' 
                        data-aos='flip-down'
                    onMouseEnter={this.toggleBankMouseEnter} onMouseLeave={this.toggleBankMouseLeave} >
                        <div className="inner-part">
                            <label className= 'img'>
                                <img className='img-1' src={Bankimg}/>
                            </label>
                            <div className="content content-1">
                                {this.renderBankDescription()}
                            {/* <button onClick={this.toggleBankFlip} className='project-buttons' type='submit'>{this.state.toggleBankFlip ? 'Description' : 'Tech Stack'}</button> */}
                                <button className='project-buttons' type='submit'>Live Demo</button>
                                <button className='project-buttons' type='submit'>Github Repo</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="blog-card" id='project2-card' 
                    data-aos='flip-up'
                    onMouseEnter={this.toggleTeamMouesEnter} onMouseLeave={this.toggleTeamMouseLeave}>
                        <div className="inner-part">
                            <label className= 'img'>
                                <img className='img-1' src={yourteamtimeImg}/>
                            </label>
                            <div className="content content-1">
                                {this.renderTeamtimeDescription()}
                            {/* <button onClick={this.toggleTeamFlip} className='project-buttons' type='submit'>{this.state.toggleTeamFlip ? 'Description' : 'Tech Stack'}</button> */}
                                <button className='project-buttons' type='submit'>Live Demo</button>
                                <button className='project-buttons' type='submit'>Github Repo</button>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card" id='project3-card' 
                    data-aos='flip-left'
                    onMouseEnter={this.toggleTicketMouseEnter} onMouseLeave={this.toggleTicketMouseLeave}>
                        <div className="inner-part">
                            <label className= 'img'>
                                <img className='img-1' src={ticketfinderImg}/>
                            </label>
                            <div className="content content-1">
                                {this.renderTicketfinderDescription()}
                            {/* <button onClick={this.toggleFlip} className='project-buttons' type='submit'>{this.state.toggleTickerFlip ? 'Description' : 'Tech Stack'}</button> */}
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