import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Landing from './components/Landing';
import Hive from './components/Hive';
import Frame from './components/Frame';

class App extends Component {
  render() {
    const style = {
      width: "75%",
      margin: "0 auto"
    }
    return (
      <div style={style}>
        <Router>
          <div>
            <Route exact path="/" component={ Landing } />
            <Route path="/hive/:hiveId" component={ Hive } />
            <Route path="/hive/:hiveId/frame/:frameId" component={ Frame } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
