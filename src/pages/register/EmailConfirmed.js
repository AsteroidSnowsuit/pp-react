import React, { Component } from 'react'
import HomepageNavigation from '../../components/navigation/HomepageNavigation';
import LinkButton from '../../components/LinkButton';
import Homepage from '../Homepage';

export class EmailConfirmed extends Component {
    render() {
        return (
            <Homepage>
                <div className="columns is-fullheight email-confirmation has-text-centered">
                    <div className="column is-4 is-offset-4 is-10-mobile is-offset-1-mobile">
                    <img src={require('../../img/confirmation.svg')} />
                    <h1 className="title">Votre email a été confirmé !</h1>
                    <h2 className="subtitle">Vous pouvez dès maintenant vous connecter et utiliser le site !</h2>
                    <LinkButton type="primary" destination="/connexion">Se connecter</LinkButton>
                </div>
                </div>
            </Homepage>
        )
    }
}

export default EmailConfirmed
