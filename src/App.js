import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import NoMatch from './pages/NoMatch'


export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path={["/dashboard"]} component={Dashboard} />
            <Route exact path={["/", "/home"]} component={Homepage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
