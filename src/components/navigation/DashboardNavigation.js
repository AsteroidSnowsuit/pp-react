import React, { Component } from 'react'
import NavLink from './NavLink'
import Navigation from './Navigation'

export class DashboardNavigation extends Component {
    render() {
        return (
            <Navigation>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/search">Recherche</NavLink>
                <NavLink to="/groups">Groupes</NavLink>
                <NavLink to="/me">Mon profil</NavLink>
                <NavLink to="/logoff">Se déconnecter</NavLink>
            </Navigation>
        )
    }
}

export default DashboardNavigation
