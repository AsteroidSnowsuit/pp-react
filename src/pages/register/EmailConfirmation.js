import React, { Component } from 'react'
import HomepageNavigation from '../../components/navigation/HomepageNavigation';

export class EmailConfirmation extends Component {
    render() {
        return (
            <div className="container">
                <HomepageNavigation />
                <div className="columns email-confirmation has-text-centered">
                    <div className="column is-vcentered is-4 is-offset-4 is-10-mobile is-offset-1-mobile">
                    <img src={require('../../img/email.svg')} />
                    <h1 className="title">Vous avez du courrier !</h1>
                    <h2 className="subtitle">Cliquez sur le lien de confirmation dans le email que nous vous avons envoyé afin de confirmer votre inscription.</h2>
                </div>
                </div>
            </div>
        )
    }
}

export default EmailConfirmation
