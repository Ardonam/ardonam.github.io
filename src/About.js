import React, { Component } from 'react';
import './App.css';
import './About.css';


class About extends Component {

  render() {
    return (

      <div  className="About-container">



        {/*<h1 className="App-title">Wellocme to my portfolio</h1>*/}

        <h1 id={this.props.id} className="About-title" >ABOUT</h1>
        <h2 className="" >From costomizing linux for embeded devices to deloying javascript sites to the web, I enjoy a hard challenge and am passionate about makeing a good expiriance for the user. </h2>
        <img src={require(`./images/meAndSon.png`)} className="Project-preview"  alt="Me and Son" />
        <h2 className="" >Studied Computer Sience and Arts in <br/> Music at Montana State University</h2>
        <h2 className="" >Languages and technologies in order of familiarity: <br/>
                        Java, Python, Javascript, HTML, CSS, C, C++ <br/>
                        Git, React.js, Yocto, Android SDK, MongoDB, Node.js, OpenGL, Docker</h2>

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

export default About;
