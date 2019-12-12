import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import {withRouter} from 'react-router-dom'
import Axios from 'axios'
import * as Cookies from 'js-cookie'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'


export class OfferPage extends Component {

    constructor(props) {
        super(props);
        this.state = {loading: true, offer: [], organization: [], isUserIn: false}
        this.handleParticipation = this.handleParticipation.bind(this);
        this.handleQuitting = this.handleQuitting.bind(this);
        this.getOffer = this.getOffer.bind(this)
    }

    getOffer() {
        Axios.get('http://localhost:8000/api/offer/' + this.props.match.params.id, {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
       .then((success) => {
           this.setState({loading: false, offer: success.data.data.offer, organization: success.data.data.offer.organization, nPlaces: success.data.data.n_places});
           this.setState({isUserIn: success.data.data.isUserIn})
       }, (error) => {
           this.props.history.push('/offres');
       })
    }

    componentDidMount() {
        this.getOffer();
    }

    handleParticipation() {
        this.setState({button_loading: true})
        Axios.get('http://localhost:8000/api/offer/' + this.props.match.params.id + '/join', {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
        .then((success) => {
            this.setState({button_loading: false});
            store.addNotification({
                message: 'Vous avez bien été inscrit à cette offre !',
                type: 'success',
                container: 'top-right'
            })
            this.setState({isUserIn: true});
            this.setState({nPlaces : this.state.nPlaces - 1})
            this.getOffer()
        }, 
        (error) => {
            this.setState({button_loading: false});
            store.addNotification({
                title: 'Erreur !',
                message: error.response.data.error,
                type: 'danger',
                container: 'top-right'
            })
        })
    }

    handleQuitting() {
        this.setState({button_loading: true})
        Axios.get('http://localhost:8000/api/offer/' + this.props.match.params.id + '/quit', {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
        .then((success) => {
            this.setState({button_loading: false});
            store.addNotification({
                message: 'Vous avez bien été désinscrit de cette offre !',
                type: 'success', 
                container: 'top-right'
            })
            this.setState({isUserIn: false});
            this.setState({nPlaces : this.state.nPlaces + 1})
            this.getOffer()
        }, 
        (error) => {
            this.setState({button_loading: false});
            store.addNotification({
                title: 'Erreur !',
                message: 'Vous ne pouvez pas vous désincrire d\'une offre à laquelle vous n\'êtes pas incrit.',
                type: 'danger',
                container: 'top-right'
            })
        })
    }

    render() {
        return (
            <Dashboard loading={this.state.loading}>
                <div className="levels offer-header">
                    <div className="level-left">
                        <h1 className="title">{this.state.offer.name}</h1>
                        <span className="subtitle">{this.state.organization.name}</span>
                        <p>{this.state.offer.description}</p>
                    </div>
                    <div className="level-right">
                        <img src={require('../../img/user/hands.svg')} />
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-8 nbPlaces">
                        <h2 className="subtitle is-3">Inscription</h2>
                        <div>
                        {(!this.state.isUserIn) ?
                            ((this.state.nPlaces > 0) ? 
                            <React.Fragment>
                                Il reste <span>{Math.abs(this.state.offer.placesAvailable)} places</span> disponibles.<br />
                                <div className="button is-primary" onClick={this.handleParticipation}>S'insrire seul</div>
                            </React.Fragment> :
                            <React.Fragment>
                                Il y a <span>{Math.abs(this.state.offer.placesAvailable)} utilisateurs</span> dans la file d'attente.<br />
                                <div className="button is-primary" onClick={this.handleParticipation}>S'insrire dans la file d'attente</div>
                            </React.Fragment>) :
                            <React.Fragment>
                                Vous êtes inscrit à cette offre.<br />
                                <div className="button is-primary" onClick={this.handleQuitting}>Se désincrire</div>
                            </React.Fragment>}
                        </div>
                    </div>
                    <div className="column is-4 offer-map">
                        L'offre est située au {this.state.offer.address}
                        
                    </div>
                </div>
            </Dashboard>
        )
    }
}

export default withRouter(OfferPage)
