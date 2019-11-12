import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import LinkButton from '../components/LinkButton';

export class NoMatch extends Component {
    render() {
        return (
            <div className="container">
                <div className="columns is-fullheight has-text-centered">
                    <div className="column is-vcentered is-4 is-offset-4 is-10-mobile is-offset-1-mobile">
                    <img src={require('../img/lost.svg')} />
                    <h1 className="title">Erreur 404</h1>
                    <h2 className="subtitle">La page que vous cherchez n'existe pas...</h2>
                    <LinkButton type="primary" destination="/">Retourner à la page d'accueil</LinkButton>
                </div>
                </div>
            </div>
        )
    }
}

export default NoMatch
