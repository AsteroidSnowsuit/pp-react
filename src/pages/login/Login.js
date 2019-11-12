import React, { Component } from 'react'
import HomepageNavigation from '../../components/navigation/HomepageNavigation';
import Button from '../../components/Button';

export class Login extends Component {
    render() {
        return (
            <div className="container fullheight">
                <HomepageNavigation />
                <div className="columns has-text-centered">
                    <div className="column is-vcentered is-4 is-offset-4 is-10-mobile is-offset-1-mobile">
                    <h1 className="title">Connexion</h1>
                    <img src={require('../../img/logo.svg')}></img>
                    <form className="login-form user-form fullbox-form">
                        <input type="text" placeholder="Adresse email"></input><br />
                        <input type="password" placeholder="Mot de passe"></input><br />
                        <Button type="primary">Se connecter</Button>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Login
