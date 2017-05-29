import React, { Component } from 'react'

export default class Frame extends Component {
  render() {
    const style = {
      height: "100%",
      width: "100%",
      objectFit: "contain"
    }

    const containerStyle = {
      display: "flex", 
      height: "100%",
      padding: "5px 0"
    };

    const leftPaneStyle = {
      float: "left"
    }

    const rightPaneStyle = {
      float: "right", 
      height: "100%"
    }

    return (
      <div style={containerStyle} onClick={() => this.props.onFrameSelected(this.props.frame)}>
        <div style={leftPaneStyle} >
          <h2>{this.props.name}</h2>
        </div>
        <div style={rightPaneStyle}>
          <img style={style} src={this.props.imageSource} alt="Most recent" />
        </div>
      </div>
    );

  }
}