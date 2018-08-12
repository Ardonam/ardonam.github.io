import React, { Component } from 'react';
import IconCircle from './icons/IconCircle';
import IconCode from './icons/IconCode';
import IconAbout from './icons/IconAbout';
import IconMusic from './icons/IconMusic';
import IconInfo from './icons/IconInfo';
import navBar from './images/navBar.png';
import logo from './logo.svg';
import Code from './Code';
import './index.css';
import './App.css';


class App extends Component {
  comp() {
    // document.body.classList.add('blur');
  }

  render() {
    return (
      <div>
      <div className="bg">
      </div >

      <div className="App-bar-div">
        <img src={navBar} className="App-bar" alt="logo" />
        <IconCircle />
        <IconCode style={{top: '-90px'}}/>
        <IconAbout style={{top: '-25px'}}/>
        <IconMusic style={{top: '40px'}}/>
        <IconInfo style={{top: '105px'}}/>
      </div>

        <div className="App-home">



        {/*<h1 className="App-title">Wellocme to my portfolio</h1>*/}
        <h1 className="App-title">ERIC NORMAN</h1>
        <h1 className="App-title2" style={{left:"50%"}}>Software Engineer</h1>
        <h1 className="App-title2" style={{position: "relative",float:"right",right:"5%",marginTop:"55vh"}}>Portfolio</h1>

{/*
        Find out more about me at my website:
        http://www.adamhartwig.co.uk

        I'm an award winning digital designer and developer specialising in rich interactive experiences for web, tablet and mobile. I'm passionate about interactive media, and in an age of digital, I believe being able to bring design to life with code is essential.

        Since graduating with a 1st Class BA Honours degree in Design: Multimedia & Graphics in 2008, I have been working with global brands, and I am internationally recognised in the creative industry for my talent and ability to intertwine design and development philosophies.

        Specialities:
        Concept to creation
        Web, mobile and tablet design and development
        Rich interactive applications
        Video production
        User experience
        Innovation
*/}
        </div>
        <Code />

      </div>

    );
  }
}

export default App;
