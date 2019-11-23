import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import NoMatch from './pages/NoMatch'
import Register from './pages/register/Register'
import RegisterVolunteer from './pages/register/RegisterVolunteer'
import RegisterOrganism from './pages/register/RegisterOrganism'
import EmailConfirmation from './pages/register/EmailConfirmation';
import EmailConfirmed from './pages/register/EmailConfirmed';
import Login from './pages/login/Login'
import DashboardHomepage from './pages/dashboard/DashboardHomepage';
import UserProfile from './pages/user/UserProfile'

//export const RequestContext = React.createContext('http://localhost:8000');

export class App extends Component {
  render() {
    return (
      //<RequestContext.Provider>
        <Router>
          <div>
            <Switch>
              <Route exact path={["/tableaudebord"]} component={DashboardHomepage} />
              <Route exact path={["/profil"]} component={UserProfile} />
              <Route exact path={["/inscription/benevole"]} component={RegisterVolunteer} />
              <Route exact path={["/inscription/verifier-email"]} component={EmailConfirmation} />
              <Route exact path={["/inscription/email-confirme"]} component={EmailConfirmed} />
              <Route exact path={["/inscription/organisme"]} component={RegisterOrganism} />
              <Route exact path={["/inscription"]} component={Register} />
              <Route exact path={["/connexion"]} component={Login} />
              <Route exact path={["/", "/accueil"]} component={Homepage} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      //</RequestContext.Provider>
    )
  }
}

export default App
