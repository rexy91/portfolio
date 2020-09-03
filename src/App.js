import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/main'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Main/>
      </div>
    );
  }
}

export default App;
