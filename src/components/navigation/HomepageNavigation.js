import React, { Component } from 'react'
import Navigation from './Navigation'
import NavLink from './NavLink'
import NavButton from './NavButton'

export class HomepageNavigation extends Component {
    render() {
        return (
            <Navigation>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">À propos</NavLink>
                <NavLink to="/donations">Dons</NavLink>
                <NavLink to="/login">Se connecter</NavLink>
                <NavButton to="/register">S'inscrire</NavButton>
            </Navigation>
        )
    }
}

export default HomepageNavigation
