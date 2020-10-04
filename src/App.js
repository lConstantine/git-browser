import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'materialize-css'

import Home from './components/Home'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/git-browser/" component={() => <Home />} />
          <Route exact path="/git-browser/:userName" component={() => <Home />} />
          <Route exact path="/git-browser/:userName/:repositoryName" component={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
