import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

export default class FrameDetail extends Component {
  render() {
    if (!this.props.frame) {
      return (
        <div>Select a frame</div>
      );
    }

    return (
      <div style={{ paddingLeft: "10px", height: "80vh" }}>
        <div>
          <img style={{ width: "100%" }} src={this.props.frame.topImageSource} alt="Top in comparison view" />
        </div>
        <div style={{ padding: "10px" }}>
          <img style={{ width: "100%" }} src={this.props.frame.bottomImageSource} alt="Bottom in comparison view" />
        </div>
      </div>
    );
  }
}