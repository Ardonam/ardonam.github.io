import React, { Component } from 'react';
import ProjectInfo from './components/ProjectInfo';
import graphics from './images/myworld.png';
import litesys from './images/ls.png';
import mngo from './images/mngo.png';
import kpc3 from './images/lsk.png';
import YouTube from 'react-youtube';
import './App.css';
import './Hobbies.css';


class Hobbies extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    return (

      <div  className="Hobbies-container">



        {/*<h1 className="App-title">Wellocme to my portfolio</h1>*/}

        <h1 id={this.props.id} className="Hobbies-title" >HOBBIES</h1>
        <div className="Hobbies-pic-container">
        <h2 className="" >Member of the Montata State University Symphoney Orchestra for thee years</h2>
        <img src={require(`./images/msu.jpg`)} className="Hobbies-pic"  alt="Symphoney orchestra" />
        </div>
        <h2 className="" ><br/>Most resent work</h2>
        <div className="Hobbies-pic-container">
        <YouTube
          videoId="VJkl671jbds"

          className="Hobbies-pic"
          onReady={this._onReady}
        />
        </div>

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
    );
  }
}

export default Hobbies;
