import React, { Component } from 'react';

import graphics from '../images/myworld.png';
import litesys from '../images/ls.png';
import mngo from '../images/mngo.png';
import kpc3 from '../images/lsk.png';
import './ProjectInfo.css'


class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailClass: "Project-details",
      previewClass: "Project-preview"
    };


    // This binding is necessary to make `this` work in the callback
    this.showDetail = this.showDetail.bind(this);
  }
  showDetail() {
    if(this.state.detailClass == "Project-details"){
      this.setState({ detailClass: "Project-details show" });
      this.setState({ previewClass: "Project-preview hide" });
    }
    else{
      this.setState({ detailClass: "Project-details" });
      this.setState({ previewClass: "Project-preview" });
    }

  }
  render() {
    return (

      <div className="ProjectInfo-container">

        <h2 style={{float:"left"}}>{this.props.title}</h2>

        <img src={require(`../images/${this.props.image.toLowerCase()}.png`)} className={this.state.previewClass}  onClick={this.showDetail} alt="logo" />
        <h2 className={this.state.detailClass} onClick={this.showDetail}>{this.props.detail}</h2>
        <h2 className="">{this.props.tech}</h2>
      </div>
    );
  }
}

export default ProjectInfo;
