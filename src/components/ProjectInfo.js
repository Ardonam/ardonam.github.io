import React, { Component } from 'react';
import './ProjectInfo.css'


class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailClass: "Project-details size-small size-medium",
      previewClass: "Project-preview"
    };


    // This binding is necessary to make `this` work in the callback
    this.showDetail = this.showDetail.bind(this);
  }
  showDetail() {
    if(this.state.detailClass === "Project-details size-small size-medium"){
      this.setState({ detailClass: "Project-details size-small size-medium show" });
      this.setState({ previewClass: "Project-preview hide" });
    }
    else{
      this.setState({ detailClass: "Project-details size-small size-medium" });
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
