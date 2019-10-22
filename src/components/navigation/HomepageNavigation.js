import React, { Component } from 'react'
import Navigation from './Navigation'
import NavLink from './NavLink'
import NavButton from './NavButton'

export class HomepageNavigation extends Component {
    render() {
        return (
            <Navigation>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/apropos">À propos</NavLink>
                <NavLink to="/dons">Dons</NavLink>
                <NavLink to="/connexion">Se connecter</NavLink>
                <NavButton to="/inscription">S'inscrire</NavButton>
            </Navigation>
        )
    }
}

export default HomepageNavigation
