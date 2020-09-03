import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

// Components
import LandingRedo from './components/LandingRedo/LandingRedo'
import Resume from'./components/resume'
import Projects from './components/projects'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <LandingRedo/>
      </div>
    );
  }
}

export default App;
