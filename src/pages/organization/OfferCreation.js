import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import ErrorContainer from '../../components/ErrorContainer'
import Axios from 'axios';
import * as Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import InterestList from './../../components/register/InterestList'
import {addInterest, handleChange, addAlgolia} from 'utils'
import {store} from 'react-notifications-component'

export class OfferCreation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            interests: {},
            name: '',
            description: '',
            address: '',
            date: '',
            n_places: '',
            minimumAge: 0
        }
        this.handleChange = handleChange.bind(this);
        this.addAlgolia = addAlgolia.bind(this);
        this.addInterest = addInterest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.addAlgolia()
    }

    handleSubmit(e) {
        e.preventDefault();
        var token = Cookies.get('token');
        Axios.post('http://localhost:8000/api/offer', 
        {
            name: this.state.name, 
            description: this.state.description, 
            address: this.state.address, 
            date: this.state.date, 
            n_places: this.state.n_places,
            minimumAge: this.state.minimumAge,
            interests: this.state.interests,
            direct_participation: this.state.direct_participation,
            participation_url: this.state.participation_url
        }, 
        {headers: {"Accept": 'application/json', "Authorization": `Bearer ${token}`}})
        .then(
        (success) => {
            this.setState({loading: false})
            console.log(success)
            this.props.history.push('/offres/' + success.data.data.id)
        }, 
        (error) => {
            store.addNotification({
                          title: 'Erreur !',
                          message: error.response.data.error,
                          type: 'danger',
                          container: 'top-right'
                        })
            this.setState({errors: error.response.data.data})
            });
    }

    render() {
        return (
            <Dashboard>
                <section className="section has-text-centered">
                    <div className="column is-offset-1 is-10">
                    <h1 className="title is-size-1 register-title">Création d'une offre</h1>
                        <section className="section organism-register">
                    <form className="user-form fullbox-form" method="POST" onSubmit={this.handleSubmit}>
                            <div className="has-text-left input-fixer">
                            <label className="is-size-4">Nom de l'offre : </label><input type="text" name="name" placeholder="Nom de l'organisme" value={this.state.name} onChange={this.handleChange}/>
                            <label className="is-size-4">Description de l'offre : </label><textarea name="description" placeholder="Description de l'organisme" value={this.state.description} onChange={this.handleChange}/>
                            <label className="is-size-4">Adresse de l'offre : </label><input id="address-input" type="text" name="address" value={this.state.address} onChange={this.handleChange}></input>
                            <label className="is-size-4">Date de l'offre : </label><input type="date" name="date" value={this.state.date} onChange={this.handleChange}></input>
                            <label className="is-size-4">Nombre de places disponibles : </label><input type="number" name="n_places" value={this.state.number} onChange={this.handleChange}/>
                            <label className="is-size-4">Âge minimum pour participer : </label><input type="number" name="minimumAge" value={this.state.minimumAge} onChange={this.handleChange} />
                            <div class="pretty p-default p-thick">
                            <input name="direct_participation" type="checkbox" value={this.state.direct_participation} onChange={this.handleChange}></input>
                                <div class="state">
                                <label className="is-size-4">Activer la participation directe</label>
                                </div>
                            </div>
                            <p>La participation directe vous permet d'afficher votre offre sans passer par le système de participation de Volontarius. Les utilisateurs seront envoyés à l'URL désirée.</p>
                            {(this.state.direct_participation == true) ? 
                                (<React.Fragment>
                                    <label className="is-size-4">URL pour la participation : </label><input type="text" name="participation_url" value={this.state.participation_url} onChange={this.handleChange} />
                                 </React.Fragment>) :
                                ''
                            }
                            </div>
                            <InterestList onClick={this.addInterest} />
                            <ErrorContainer errors={this.state.errors} />
                            <button className="button is-primary has-text-left">Soumettre le formulaire</button>
                        </form>
                        </section>
                    </div>
                </section>
            </Dashboard>
        )
    }
}

export default withRouter(OfferCreation)
