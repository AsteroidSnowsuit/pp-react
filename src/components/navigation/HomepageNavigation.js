import React, { Component } from 'react'
import Navigation from './Navigation'

export class HomepageNavigation extends Component {
    render() {
        return (
            <Navigation>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">À propos</NavLink>
                <NavLink to="/donations">Dons</NavLink>
                <NavLink to="/login">Se connecter</NavLink>
                <NavLink to="/register" type="button">S'inscrire</NavLink>
            </Navigation>
        )
    }
}

export default HomepageNavigation
