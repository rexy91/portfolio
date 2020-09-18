import React, { Component } from 'react';
import './NewProjectCard.css'
import Bankimg from './bank.jpg'

class NewProjectCard extends Component {
    state = {
        toggleTechstack: false
    }

    toggleFlip = () => {
        this.setState({
            toggleTechstack: !this.state.toggleTechstack
        })
    }

    renderDescription = () => {
        if(this.state.toggleTechstack === false) {
            return(
                <div className="content content-1">
                <span>Flatiron Virtual Bank</span>
                <div className="text">A full-stack web based banking application using React and Rails, allows users to sign up for a virtual bank account and perform some transactions, such as transfering funds, making deposit and withdrawal.</div>
                <button onClick={this.toggleFlip} className='project-buttons' type='submit'>Tech Stack</button>
                <button className='project-buttons' type='submit'>Live Demo</button>
                <button className='project-buttons' type='submit'>Github Repo</button>
            </div>
            )
        }
        else if(this.state.toggleTechstack === true){
                return(
                    <div>

                    </div>
                )
        }
    }

    render() {
        console.log(this.state.toggleTechstack)

        return (
            <div id='project-div'>
                    <div className="blog-card">
                        <input type="radio" name='select' id='tap-1'/>
                        <input type="radio" name='select' id='tap-2'/>

                        <div className="sliders">
                            <label className='tap tap-1'></label>
                            <label className='tap tap-2'></label>
                        </div>
                        <div className="inner-part">
                            <label className= 'img'>
                                <img className='img-1' src={Bankimg}/>
                            </label>
                                {this.renderDescription()}
                        </div>
                        <div className="inner-part">
                            <label className= 'img'>
                                <img className='img-2'src={Bankimg}/>
                            </label>
                            <div className="content content-2">
                                <span>Flatiron Virtual Bank</span>
                                <div className="text">A full-stack web based banking application using React and Rails, allows users to sign up for a virtual bank account and perform some transactions, such as transfering funds, making deposit and withdrawal.</div>
                                <button className='project-buttons' type='submit'>Tech Stack</button>
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