import React, { Component } from 'react';
import ProjectInfo from './components/ProjectInfo';
import graphics from './images/graphicsScreenShot.png';
import litesys from './images/ls.png';
import mngo from './images/mngo.png';
import kpc3 from './images/lsk.png';
import './App.css';
import './Code.css';


class Code extends Component {
  constructor() {
    super();
    this.state = {
      logo: "nandos_logo",
      name: "Nando's",
      bio: 'Best food in the west cause we make our food with the finest of tooth brushes.',
      followers: 200,
      projects:[
        {
          image: "mngo",
          title: "Mngo",
          tech: "React.js, Node.js",
          likes: 4
        },
        {
          image: "ls",
          title: "LiteSys Inc.",
          tech: "Javascript",
          likes: 4
        },
        {
          image: "lsk",
          title: "Touchscreen handheld controller",
          tech: "Custom Linux 4.4 kernel, Python",
          likes: 2
        },
        {
          image: "myworld",
          title: "3D interactive desktop application",
          tech: "OpenGL, C++",
          likes: 4
        }
      ]

    };
    this.handleFollowersChange = this.handleFollowersChange.bind(this);
  }

  handleFollowersChange(newFollowing) {
    this.setState({followers: newFollowing});
  }
  render() {
    return (

      <div className="Code-container">



        {/*<h1 className="App-title">Wellocme to my portfolio</h1>*/}

        <h1 className="Code-title" >PROJECTS</h1>
        {this.state.projects.map((pInfo, index) => (
          <ProjectInfo image={pInfo.image} title={pInfo.title} tech={pInfo.tech}/>

        ))}


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

export default Code;
