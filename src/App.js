import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Landing from './components/LandingRedo/LandingRedo'
// import AboutPageRedo from './components/AboutPageRedo/AboutPageRedo'
import NewAboutPage from './components/NewAboutPage/NewAboutPage'
import Resume from './components/resume'
import Project from './components/NewProjectCard/NewProjectCard'
import Contact from './components/contact'
import Blog from './components/blogs/Blog'

class App extends Component {
  render() {
    return (  

      <div>
        <Navbar/>
        <Landing/>
        {/* <AboutPageRedo/> */}
        <NewAboutPage/>
        <Resume/>
        <Project/>
        <Blog/>
        <Contact/>
        
      </div>
    );
  }
}

export default App;
