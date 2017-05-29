import React, { Component } from 'react'

import Hives from './Hives';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to BeeHavior Hive Management</h1>
        <Hives />
      </div>
    );
  }
}