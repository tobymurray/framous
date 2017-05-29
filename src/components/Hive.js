import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import path from 'path';

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
      <div>
        <h1>
          <Link to="/">Back to Hives</Link>
        </h1>
        <h1>Please select a frame</h1>
        <ul>{ this.state.frames.map(frame => <li key={frame} style={ { listStyleType: "none" } } onClick={() => this.onFrameSelected(frame)}><Frame /></li>) }</ul>
        <button onClick={this.onAddFrame}>Add a frame</button>
        {`Rendering "Hive" ${path.basename(this.props.location.pathname)}`}
      </div>
    );
  }
}


const Frame = (props) => {
  return (
    <div>
      I'm a frame!
    </div>
  );
}