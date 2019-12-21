import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import ErrorContainer from '../../components/ErrorContainer'
import Axios from 'axios';
import * as Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

export class OfferCreation extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        var places = require('places.js');
        var placesAutocomplete = places({
        appId: "plZJLSHIW8M5",
        apiKey: "0eddd2fc93b5429f5012ee49bcf8807a",
        container: document.querySelector('#address-input')
        });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(e) {
        e.preventDefault();
        var token = Cookies.get('token');
        Axios.post('http://localhost:8000/api/offer', 
        {name: this.state.name, description: this.state.description, address: this.state.address, date: this.state.date, n_places: this.state.n_places}, 
        {headers: {"Accept": 'application/json', "Authorization": `Bearer ${token}`}})
        .then(
        (success) => {
            this.setState({loading: false})
            console.log(success)
            this.props.history.push('/offres/' + success.data.data.id)
        }, 
        (error) => {
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
                            <label className="is-size-4">Nombre de places disponibles : </label><input type="number" name="n_places" value={this.state.number} onChange={this.handleChange}>
                            </input>
                            </div>
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
