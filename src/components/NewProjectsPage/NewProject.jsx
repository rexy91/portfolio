import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import './NewProject.css'

export default class NewProject extends Component {
    render() {
        return (
            <div className='new-project-page'>
                    <div className='project-card-container'>
                        <ProjectCard/>
                    </div>
            </div>
        )
    }
}
