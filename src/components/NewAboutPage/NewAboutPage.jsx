import React, { Component } from 'react'
import './NewAboutPage.css' 
import {Row, Col} from 'react-bootstrap'

export default class NewAboutPage extends Component {
    render() {
        return (
            <div id='new-about-div'>
                <div className='bio-div'>
                        <h1>About Me</h1>    
                        <p>I'm a full-stack developer based in New York city.
                        I have a passion for building responsive web applications that solve real world problems.
                        With extensive education in software engineering and full-stack development.Seft-starter with excellent project management and multi-tasking skills.
                        <br/>Experienced in JavaScript, React, Redux and Ruby on Rails based programming.</p>
                </div>
            <div className='skill-section'>
                        <h1>Skills</h1>
                    <div className='skills-div'>
                            <Row>
                                <Col>1 of 3</Col>
                                <Col>2 of 3</Col>
                                <Col>3 of 3</Col>
                            </Row>
                    </div>
            </div>
            </div>
        )
    }
}
