import React, { Component } from 'react';
import DrawRect from './components/DrawRect'
import bg from './images/bg.png';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (

      <div className="App-background">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DrawRect />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
