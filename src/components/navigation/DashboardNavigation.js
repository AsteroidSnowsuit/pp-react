import React, { Component } from 'react'
import NavLink from './NavLink'
import Navigation from './Navigation'

export class DashboardNavigation extends Component {
    render() {
        return (
            <Navigation dashboard={true}>
                <NavLink to="/tableaudebord">Tableau de bord</NavLink>
                {(this.props.organism == 0) ?
                    <React.Fragment>
                        <NavLink to="/recherche">Recherche</NavLink>
                        <NavLink to="/groupes">Groupes</NavLink>
                        <NavLink to="/profil">Mon profil</NavLink>
                    </React.Fragment>
                    : 
                    <React.Fragment>
                        <NavLink to="/offres">Offres</NavLink>
                        <NavLink to="/organisme">Organisme</NavLink>
                    </React.Fragment>
                }
                <NavLink to="/deconnexion">Se déconnecter</NavLink>
            </Navigation>
        )
    }
}

export default DashboardNavigation
