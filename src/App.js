import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import LandingRedo from './components/LandingRedo/LandingRedo'
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
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
