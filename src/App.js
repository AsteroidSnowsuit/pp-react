import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import HomepageHomepage from './pages/homepage/HomepageHomepage'
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
import Logout from './pages/Logout'
import AddOrganism from './pages/organization/AddOrganism'
import OfferCreation from './pages/organization/OfferCreation'
import OfferPage from './pages/organization/OfferPage'
import OrganismOffers from './pages/organization/OrganismOffers'
import ReactNotification from 'react-notifications-component'
import OrganismOffer from './pages/organization/OrganismOffer'
import "../src/css/app.scss"
import SmartSearch from './pages/search/SmartSearch'

export class App extends Component {
  render() {
    return (
        <Router>
          <ReactNotification />
          <div>
            <Switch>
              <PrivateRoute exact path="/profil">
                <UserProfile />
              </PrivateRoute>
              <PrivateRoute exact path="/tableaudebord">
                <DashboardHomepage />
              </PrivateRoute>
              <PrivateRoute reverse="true" exact path="/inscription">
                <Register />
              </PrivateRoute>
              <PrivateRoute reverse="true" exact path="/inscription/benevole">
                <RegisterVolunteer />
              </PrivateRoute>
              <PrivateRoute reverse="true" exact path="/connexion">
                <Login />
            </PrivateRoute>
            <PrivateRoute reverse="true" exact path="/inscription/organisme">
              <RegisterOrganism />
            </PrivateRoute>
            <PrivateRoute exact path="/recherche">
              <SmartSearch />
            </PrivateRoute>
            <PrivateRoute exact path="/offres/:id">
              <OfferPage />
            </PrivateRoute>
            <PrivateRoute exact path="/organisme/creation">
              <AddOrganism />
            </PrivateRoute>
            <PrivateRoute exact path="/organisme/offres/:id">
              <OrganismOffer />
            </PrivateRoute>
            <PrivateRoute exact path="/organisme/offres">
              <OrganismOffers />
            </PrivateRoute>
            <PrivateRoute exact path="/organisme/offres/nouvelle">
              <OfferCreation />
            </PrivateRoute>
            <PrivateRoute path="/deconnexion">
              <Logout />
            </PrivateRoute>
            <Route exact path={["/inscription/verifier-email"]} component={EmailConfirmation} />
            <Route exact path={["/inscription/email-confirme"]} component={EmailConfirmed} />
            <Route exact path={["/", "/accueil"]} component={HomepageHomepage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
