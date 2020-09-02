import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import LandingRedo from './components/LandingRedo/LandingRedo'
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
            <LandingRedo/>
        </div>

    );
  }
}

export default App;
