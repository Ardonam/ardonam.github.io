import React, { Component } from 'react';

// Icon
class IconMusic extends Component {

  render() {
    return (
      <svg className="App-nav-icon" id={this.props.id} style={this.props.style} onClick={this.props.onClick} xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} fillRule="evenodd" clipRule="evenodd" viewBox="0 0 24 24">
      <title>Music Icon</title>
      <path fill={this.props.fill} d="M22 18.318c-.003 1.186-.717 2.414-1.948 3.127-1.731 1.003-3.832.609-4.689-.881-.856-1.489-.146-3.512 1.585-4.516 1.391-.806 3.021-.709 4.052.133v-10.967l-12 2.572v12.475c.02 1.203-.697 2.46-1.948 3.184-1.731 1.003-3.832.609-4.689-.881-.856-1.489-.146-3.512 1.585-4.516 1.391-.806 3.021-.709 4.052.133v-15.181l14-3v18.318zm-17.556.582c1.259-.729 2.756-.496 3.34.52.585 1.017.038 2.434-1.221 3.164-1.26.73-2.757.497-3.341-.52-.585-1.016-.038-2.434 1.222-3.164zm13-2c1.259-.729 2.756-.496 3.34.52.585 1.017.038 2.434-1.221 3.164-1.26.73-2.757.497-3.341-.52-.585-1.016-.038-2.434 1.222-3.164zm-8.444-13.092v2.955l12-2.571v-2.955l-12 2.571z"/>
      </svg>
    );
  }
}

export default IconMusic;
