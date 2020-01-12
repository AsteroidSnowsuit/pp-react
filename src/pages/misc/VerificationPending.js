import React, { Component } from 'react'
import Button from '../../components/Button'
import Axios from 'axios';
import * as Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

export class VerificationPending extends Component {

    constructor(props) {
        super(props);
        this.checkStatus = this.checkStatus.bind(this);
    }
    
    componentDidMount() {
        if(Cookies.get('validation-pending') == "false") {
            this.props.history.push('/tableaudebord');
        }
    }

    checkStatus() {
        Axios.get('https://api.volontarius.com/api/check-status', {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}}).then(
            (success) => {
                Cookies.set('validation-pending', false);
                this.props.history.push('/tableaudebord')
            }, (error) => {
                Cookies.set('validation-pending', true);
            }
        )
    }
    render() {
        return (
            <div className="container">
                <div className="columns is-fullheight has-text-centered">
                    <div className="column is-vcentered is-4 is-offset-4 is-10-mobile is-offset-1-mobile">
                    <img src={require('../../img/validation.svg')} />
                    <h1 className="title">En attente de validation...</h1>
                    <h2 className="subtitle">Avant de pouvoir continuer, un administrateur va valider manuellement votre demande. Ce processus devrait prendre moins de 48 heures. Vous serez averti par email quand votre demande sera approuvée.</h2>
                    <Button type="primary" onClick={this.checkStatus} noSubmit={true}>Vérifier le statut de validation</Button>
                </div>
                </div>
            </div>
        )
    }
}

export default withRouter(VerificationPending)
