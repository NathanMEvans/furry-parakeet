import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
         <img src={logo} className='image' alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
