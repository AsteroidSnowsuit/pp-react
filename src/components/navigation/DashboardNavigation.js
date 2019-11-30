import React, { Component } from 'react'
import NavLink from './NavLink'
import Navigation from './Navigation'

export class DashboardNavigation extends Component {
    render() {
        return (
            <Navigation dashboard={true}>
                <NavLink to="/tableaudebord">Tableau de bord</NavLink>
                <NavLink to="/recherche">Recherche</NavLink>
                <NavLink to="/groupes">Groupes</NavLink>
                <NavLink to="/profil">Mon profil</NavLink>
                <NavLink to="/deconnexion">Se déconnecter</NavLink>
            </Navigation>
        )
    }
}

export default DashboardNavigation
