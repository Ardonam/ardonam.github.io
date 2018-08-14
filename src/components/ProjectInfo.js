import React, { Component } from 'react';

import graphics from '../images/graphicsScreenShot.png';
import litesys from '../images/ls.png';
import mngo from '../images/mngo.png';
import kpc3 from '../images/lsk.png';
import './ProjectInfo.css'


class ProjectInfo extends Component {
  render() {
    return (

      <div className="ProjectInfo-container">

        <h2 style={{float:"left"}}>{this.props.title}</h2>

        <img src={require(`../images/${this.props.image.toLowerCase()}.png`)} className="Project-preview"  alt="logo" />
        <h2 className="">{this.props.tech}</h2>
      </div>
    );
  }
}

export default ProjectInfo;
