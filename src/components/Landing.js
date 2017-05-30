import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

import Hives from './Hives';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <PageHeader>BeeHavior <small>Hive Management Tool</small></PageHeader>
        <Hives />
      </div>
    );
  }
}