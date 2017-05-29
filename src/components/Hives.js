import React, { Component } from 'react'
import { Redirect } from 'react-router';

import beehive from '../images/hive.png';

const HIVE_LIST = [1, 2, 3]

export default class Hives extends Component {
  constructor() {
    super();
    this.state = { 
      hives: [...HIVE_LIST],
      hivselectedHivee: null,
      redirect: false 
    }

    this.onAddHive = this.onAddHive.bind(this);
    this.onHiveSelected = this.onHiveSelected.bind(this);
  }

  onAddHive() {
    this.setState({ hives: [...this.state.hives, this.state.hives.length+1]})
  }

  onHiveSelected(hive) {
    console.log("Selected a hive ", hive);

    this.setState({ 
      redirect: true,
      selectedHive: hive
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={`/hive/${this.state.selectedHive}`} />
    }

    return (
      <div>
        <h1>Please select a hive</h1>
        <ul>{ this.state.hives.map(hive => <li key={hive} style={ { listStyleType: "none" } } onClick={() => this.onHiveSelected(hive)}><Hive /></li>) }</ul>
        <button onClick={this.onAddHive}>Add a hive</button>
      </div>
    );
  }
}

const Hive = (props) => {
  return (
    <div>
      <img src={ beehive } alt="Beehive placeholder"/>
      I'm a hive!
    </div>
  );
}