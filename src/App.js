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
import PrivateRoute from './PrivateRoute'

//export const RequestContext = React.createContext('http://localhost:8000');

export class App extends Component {
  render() {
    return (
      //<RequestContext.Provider>
        <Router>
          <div>
            <Switch>
              <PrivateRoute path="/profil">
                <UserProfile />
              </PrivateRoute>
              <PrivateRoute path="/tableaudebord">
                <DashboardHomepage />
              </PrivateRoute>
              <PrivateRoute reverse="true" path="/inscription">
                <Register />
              </PrivateRoute>
              <PrivateRoute reverse="true" path="/inscription/benevole">
                <RegisterVolunteer />
              </PrivateRoute>
              <PrivateRoute reverse="true" path="/connexion">
                <Login />
              </PrivateRoute>
              <PrivateRoute reverse="true" path="/inscription/organisme">
                <RegisterOrganism />
              </PrivateRoute>
              <Route exact path={["/inscription/verifier-email"]} component={EmailConfirmation} />
              <Route exact path={["/inscription/email-confirme"]} component={EmailConfirmed} />
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
