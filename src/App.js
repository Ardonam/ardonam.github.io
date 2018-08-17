import React, { Component, Button } from 'react';
import IconCircle from './icons/IconCircle';
import IconCode from './icons/IconCode';
import IconAbout from './icons/IconAbout';
import IconMusic from './icons/IconMusic';
import IconInfo from './icons/IconInfo';
import navBar from './images/navBar.png';
import logo from './logo.svg';
import Code from './Code';
import About from './About';
import Hobbies from './Hobbies';
import Info from './Info';
import './index.css';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: false,
      isPortfolio: false
    };


    // This binding is necessary to make `this` work in the callback
    this.navHome = this.navHome.bind(this);
    this.navPortfolio = this.navPortfolio.bind(this);
    this.navAbout = this.navAbout.bind(this);
    this.navMusic = this.navMusic.bind(this);
    this.navInfo = this.navInfo.bind(this);
  }

  navHome() {
      document.getElementById("home").scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      // document.getElementById("homeButton").classList.add("click")
      // document.getElementById("portButton").classList.remove("click")
      // document.getElementById("aboutButton").classList.remove("click")
      // document.getElementById("musicButton").classList.remove("click")
      // document.getElementById("infoButton").classList.remove("click")

  }
  navPortfolio() {
      document.getElementById("portfolio").scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      // document.getElementById("portButton").classList.add("click")
      // document.getElementById("homeButton").classList.remove("click")
      // document.getElementById("aboutButton").classList.remove("click")
      // document.getElementById("musicButton").classList.remove("click")
      // document.getElementById("infoButton").classList.remove("click")

  }
  navAbout() {
      document.getElementById("about").scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      // document.getElementById("aboutButton").classList.add("click")
      // document.getElementById("portButton").classList.remove("click")
      // document.getElementById("homeButton").classList.remove("click")
      // document.getElementById("musicButton").classList.remove("click")
      // document.getElementById("infoButton").classList.remove("click")

  }
  navMusic() {
      document.getElementById("hobbies").scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      // document.getElementById("musicButton").classList.add("click")
      // document.getElementById("portButton").classList.remove("click")
      // document.getElementById("aboutButton").classList.remove("click")
      // document.getElementById("homeButton").classList.remove("click")
      // document.getElementById("infoButton").classList.remove("click")

  }
  navInfo() {
      document.getElementById("info").scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      // document.getElementById("infoButton").classList.add("click")
      // document.getElementById("portButton").classList.remove("click")
      // document.getElementById("aboutButton").classList.remove("click")
      // document.getElementById("musicButton").classList.remove("click")
      // document.getElementById("homeButton").classList.remove("click")

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.getElementById("homeButton").classList.add("click")
    if (this.props.location == "portfolio"){
      // document.getElementById("portfolio").scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      this.navPortfolio();
    }
    else  if (this.props.location == "about"){
      this.navAbout();
    }
    else  if (this.props.location == "hobbies"){
      this.navMusic();
    }
    else  if (this.props.location == "info"){
      this.navInfo();
    }
    else {
      this.navHome();
    }

    // document.body.classList.add('blur');
  }

  //
  // componentWillUnmount: function() {
  //     window.removeEventListener('scroll', this.handleScroll);
  // },
  //
  handleScroll(){
      let scrollTop = document.documentElement.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);
      let portPos = document.getElementById("portfolio").getBoundingClientRect();
      let aboutPos = document.getElementById("about").getBoundingClientRect();
      let hobbiesPos = document.getElementById("hobbies").getBoundingClientRect();
      let infoPos = document.getElementById("info").getBoundingClientRect();
      if(portPos.y >0){
        document.getElementById("portButton").classList.remove("click")
        document.getElementById("homeButton").classList.add("click")
        document.getElementById("aboutButton").classList.remove("click")
        document.getElementById("musicButton").classList.remove("click")
        document.getElementById("infoButton").classList.remove("click")
        document.getElementById("bg").classList.remove("blur")
      }
      else if(portPos.y <0 && aboutPos.y  > 0 && hobbiesPos.y  > 0 && infoPos.y > 0){
        document.getElementById("portButton").classList.add("click")
        document.getElementById("homeButton").classList.remove("click")
        document.getElementById("aboutButton").classList.remove("click")
        document.getElementById("musicButton").classList.remove("click")
        document.getElementById("infoButton").classList.remove("click")
        document.getElementById("bg").classList.add("blur")
        // document.getElementById("infoButton").listStyle.add({color:"white"});
      }
      else if(portPos.y <0 && aboutPos.y  < 0 && hobbiesPos.y  > 0 && infoPos.y > 0){
        document.getElementById("aboutButton").classList.add("click")
        document.getElementById("portButton").classList.remove("click")
        document.getElementById("homeButton").classList.remove("click")
        document.getElementById("musicButton").classList.remove("click")
        document.getElementById("infoButton").classList.remove("click")
        document.getElementById("bg").classList.add("blur")
        // document.getElementById("infoButton").listStyle.add({color:"white"});
      }
      else if(portPos.y <0 && aboutPos.y  < 0 && hobbiesPos.y  < 0 && infoPos.y > 0){
        document.getElementById("musicButton").classList.add("click")
        document.getElementById("portButton").classList.remove("click")
        document.getElementById("aboutButton").classList.remove("click")
        document.getElementById("homeButton").classList.remove("click")
        document.getElementById("infoButton").classList.remove("click")
        document.getElementById("bg").classList.add("blur")
        // document.getElementById("infoButton").listStyle.add({color:"white"});
      }
      else if(portPos.y <0 && aboutPos.y  < 0 && hobbiesPos.y  < 0 && infoPos.y < 0){
        document.getElementById("infoButton").classList.add("click")
        document.getElementById("portButton").classList.remove("click")
        document.getElementById("aboutButton").classList.remove("click")
        document.getElementById("musicButton").classList.remove("click")
        document.getElementById("homeButton").classList.remove("click")
        document.getElementById("bg").classList.add("blur")
        // document.getElementById("infoButton").listStyle.add({color:"white"});
      }
      // console.log(myPos.y);
      console.log(scrollTop);
      console.log("hello");

  }

  render() {
    return (
      <div>
      <div id="bg" className="bg">
      </div >

      <div  className="App-bar-div">
        <img src={navBar} className="App-bar" alt="logo" />



        <IconCircle id="homeButton" onClick={this.navHome}/>
        <IconCode id="portButton" style={{top: '-90px'}} onClick={this.navPortfolio} />
        <IconAbout id="aboutButton" style={{top: '-25px'}} onClick={this.navAbout}/>
        <IconMusic id="musicButton" style={{top: '40px'}} onClick={this.navMusic}/>
        <IconInfo id="infoButton" style={{top: '105px'}} onClick={this.navInfo}/>
      </div>

        <div id="home" className="App-home">



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


        <Code id="portfolio"/>
        <About id="about"/>
        <Hobbies id="hobbies"/>
        <Info id="info"/>
      </div>
    );
  }
}

export default App;
