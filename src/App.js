import React, { Component } from 'react';
import IconCircle from './icons/IconCircle';
import IconCode from './icons/IconCode';
import IconAbout from './icons/IconAbout';
import IconMusic from './icons/IconMusic';
import IconInfo from './icons/IconInfo';
import navBar from './images/navBar.png';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (

      <div className="App-background">

        <header className="App-header">
        {/*  <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <div className="App-bar-div">
          <img src={navBar} className="App-bar" alt="logo" />
          <IconCircle />
          <IconCode style={{top: '105px'}}/>
          <IconAbout style={{top: '170px'}}/>
          <IconMusic style={{top: '235px'}}/>
          <IconInfo style={{top: '300px'}}/>
        </div>
        <h1 className="App-title">ERIC NORMAN</h1>
      </div>
    );
  }
}

export default App;
