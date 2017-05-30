import React, { Component } from 'react'
import { Thumbnail } from 'react-bootstrap';

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

    const thumbnailStyle = {
      backgroundColor: "black",
      width: "250px",
      height: "150px",
      display: "inline-block", /* makes it fit in like an <img> */
      backgroundSize: "cover", /* or contain */
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat"
    }

    const thumbnailContainer = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    }


    return (
      <div style={containerStyle} onClick={() => this.props.onFrameSelected(this.props.frame)}>
        <div style={leftPaneStyle} >
          <h2>{this.props.name}</h2>
        </div>
        <div style={rightPaneStyle}>
          <div style={thumbnailStyle}>
            <div style={thumbnailContainer}>

              <Thumbnail src={this.props.imageSource} alt="Most recent" responsive />

            </div>
          </div>
        </div>
      </div>
    );

  }
}