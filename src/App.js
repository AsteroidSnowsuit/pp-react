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
import ClassicSearch from './pages/search/ClassicSearch'
import { OrganismSettings } from './pages/organization/OrganismSettings'
import WorkingOn from './pages/WorkingOn'
import InterestsIndex from './pages/admin/interests/InterestsIndex';
import AddInterest from './pages/admin/interests/AddInterest';
import ManageInterest from './pages/admin/interests/ManageInterest'
import EditUser from './pages/user/EditUser'
import SmartSearch from './pages/search/SmartSearch'
import AlternativeDashboardHomepage from './pages/dashboard/AlternativeDashboardHomepage';
import ContactPage from './pages/misc/ContactPage'
import About from './pages/misc/About'
export class App extends Component {
  render() {
    return (
        <Router>
          <ReactNotification />
          <div>
            <Switch>
            <PrivateRoute exact path="/profil/modifier">
                <EditUser />
              </PrivateRoute>
              <PrivateRoute exact path="/profil">
                <UserProfile />
              </PrivateRoute>
              <PrivateRoute exact path="/tableaudebord">
                {/* <DashboardHomepage /> */}
                <AlternativeDashboardHomepage />
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
              <ClassicSearch />
            </PrivateRoute>
            <PrivateRoute exact path="/recherche-intelligente">
              <SmartSearch />
            </PrivateRoute>
            <PrivateRoute exact path="/offres/:id">
              <OfferPage />
            </PrivateRoute>
            <PrivateRoute exact path="/organisme/creation">
              <AddOrganism />
            </PrivateRoute>
            <PrivateRoute exact path="/organisme/offres/nouvelle">
              <OfferCreation />
            </PrivateRoute>
            <PrivateRoute exact path="/organisme/offres/:id">
              <OrganismOffer />
            </PrivateRoute>
            <PrivateRoute exact path="/organisme/offres">
              <OrganismOffers />
            </PrivateRoute>
            <PrivateRoute exact path="/organisme/parametres">
              <OrganismSettings />
            </PrivateRoute>
            <PrivateRoute path="/deconnexion">
              <Logout />
            </PrivateRoute>
            <PrivateRoute exact path="/admin/interests/:id">
              <ManageInterest />
            </PrivateRoute>
            <PrivateRoute exact path="/admin/interests">
              <InterestsIndex />
            </PrivateRoute>
            <PrivateRoute exact path="/admin/interests/store">
              <AddInterest />
            </PrivateRoute>
            <Route exact path={['/groupes', '/dons']} component={WorkingOn} />
            <Route exact path="/me-contacter" component={ContactPage} />
            <Route exact path="/apropos" component={About} />
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
