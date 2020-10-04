import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'materialize-css'

import Home from './components/Home'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home history={history} />} />
          <Route exact path="/:userName" component={() => <Home />} />
          <Route exact path="/:userName/:repositoryName" component={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
