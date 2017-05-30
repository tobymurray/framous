import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

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
    this.setState({ hives: [...this.state.hives, this.state.hives.length + 1] })
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
      <Panel>
        <h1>Please select a hive</h1>
        <Grid>
            {this.state.hives.map(hive =>
              <Row onClick={() => this.onHiveSelected(hive)}><Hive /></Row>
            )}
        </Grid>
        <button onClick={this.onAddHive}>Add a hive</button>
      </Panel>
    );
  }
}

const Hive = (props) => {
  return (
    <div>
      <img src={beehive} alt="Beehive placeholder" />
      I'm a hive!
    </div>
  );
}