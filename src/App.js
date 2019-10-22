import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import NoMatch from './pages/NoMatch'
import Register from './pages/Register'


export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path={["/tableaudebord"]} component={Dashboard} />
            <Route exact path={["/inscription"]} component={Register} />
            <Route exact path={["/", "/accueil"]} component={Homepage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
