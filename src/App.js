import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/main'
import Landing from './components/LandingRedo/LandingRedo'
import About from './components/aboutpage'
import Resume from './components/resume'
import Project from './components/NewProjectCard/NewProjectCard'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (

      <div>
        <Navbar/>
        <Landing/>
        <About/>
        <Resume/>
        <Project/>
        <Contact/>
        
      </div>
    );
  }
}

export default App;
