import React, { Component } from 'react';

// Icon
class IconCode extends Component {

  render() {
    return (
      <svg className="Code-icon" xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24">
      <title>Code Icon</title>
      <path fill={this.props.fill} d="M16 3.383l-.924-.383-7.297 17.617.924.383 7.297-17.617zm.287 3.617l6.153 4.825-6.173 5.175.678.737 7.055-5.912-7.048-5.578-.665.753zm-8.478 0l-6.249 4.825 6.003 5.175-.679.737-6.884-5.912 7.144-5.578.665.753z"/>
      </svg>
    );
  }
}

export default IconCode;
