import React, { Component } from 'react'

export default class Frame extends Component {
  render () {
    const style = {
      height: "100%",
      width: "100%",
      objectFit: "contain"
    }
    console.log("image source is: ", this.props);
    return (
      <div style={ { display: "flex", height: "100%" } }>
        <div style={ { float: "left" } } >
          {this.props.name}
        </div>
        <div style={ { float: "right", height: "100%" } }>
          <img style={style} src={this.props.imageSource} alt="Most recent image" />
        </div>
      </div>
    );

  }
}