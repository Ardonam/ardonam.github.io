import React, { Component } from 'react';

// Icon
class IconCircle extends Component {

  render() {
    return (
      <svg className="App-nav-icon" xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24">
      <title>Circle Icon</title>
      <path fill={this.props.fill} d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11z"/>
      </svg>
    );
  }
}

export default IconCircle;
