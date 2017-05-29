import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import path from 'path';

import Frame from './Frame';
import frameImage from '../images/frame.jpg';

const FRAMES_LIST = [1,2,3,4,5,6,7,8];

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
    this.setState({ frames: [...this.state.frames, this.state.frames.length+1]})
  }

  onFrameSelected(frame) {
    console.log("Selected a frame: ", frame);
  }

  render () {
    console.log(this.props);
    return (
      <div style={ { height: "100vh" } } >
        <h1>
          <Link to="/">Back to Hives</Link>
        </h1>
        <ul>{ this.state.frames.map(frame => <li key={frame} style={ { listStyleType: "none", height: "10vh" } } onClick={() => this.onFrameSelected(frame)}><Frame imageSource={frameImage} name={frame}/></li>) }</ul>
        {/*{`Rendering "Hive" ${path.basename(this.props.location.pathname)}`}*/}
      </div>
    );
  }
}