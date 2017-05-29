import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

import './Upload.css';

export default class Upload extends Component {

  constructor() {
    super();
    this.state = { 
      files: []
      
    }
  }

  onDrop(files) {
    console.log(files);
    this.setState({
      files: [...new Set([...this.state.files, ...files])]
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>{ this.state.files.map(f => <li key={f.name}><Preview imageSource={f.preview} /><br />{f.name} - {f.size} bytes </li>) }</ul>
        </aside>
      </section>
    );
  }
}

const Preview = ({imageSource}) => {
  return (
    <img alt="Preview" className="Upload-img" src={imageSource}/>
  )
}