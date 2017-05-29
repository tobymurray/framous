import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Frame from './Frame';
import FrameDetail from './FrameDetail';
import frameImage from '../images/frame.jpg';

const FRAMES_LIST = [1, 2, 3, 4, 5, 6, 7, 8];

export default class Hive extends Component {
  constructor() {
    super();
    this.state = {
      frames: [...FRAMES_LIST],
      selectedFrame: null,
    }

    this.onAddFrame = this.onAddFrame.bind(this);
    this.onFrameSelected = this.onFrameSelected.bind(this);
  }

  onAddFrame() {
    this.setState({ frames: [...this.state.frames, this.state.frames.length + 1] })
  }

  onFrameSelected(frame) {
    this.setState({
      selectedFrame: {
        topImageSource: frameImage,
        bottomImageSource: frameImage
      }
    })
  }

  render() {
    const listStyle = {
      listStyleType: "none",
      height: "10vh"
    }
    const containerStyle = {
      display: "flex",
      height: "100%",
    };

    const leftPaneStyle = {
      float: "left"
    }

    const rightPaneStyle = {
      float: "right",
      height: "100%"
    }

    return (
      <div style={{ height: "100vh" }} >
        <h1>
          <Link to="/">Back to Hives</Link>
        </h1>
        <div style={containerStyle}>
          <div style={leftPaneStyle}>
            <ul>{this.state.frames.map(frame =>
              <li key={frame} style={listStyle}>
                <Frame onFrameSelected={this.onFrameSelected} frame={frame} imageSource={frameImage} name={frame} />
              </li>
            )}</ul>
          </div>
          <div style={rightPaneStyle}>
            <FrameDetail frame={this.state.selectedFrame}/>
          </div>
        </div>
      </div>
    );
  }
}