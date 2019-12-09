import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Dashboard from '../Dashboard'
import Axios from 'axios'
import * as Cookies from 'js-cookie'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import Button from '../../components/Button';

export class OrganismOffer extends Component {

    constructor(props) {
        super(props);
        this.state = {loading: true, offer: [], organization: [], participants: [], name: "", description: "", n_places: '', address: '', date: ''}
        this.getOffer = this.getOffer.bind(this)
        this.renderParticipants = this.renderParticipants.bind(this);
        this.renderWaitingList = this.renderWaitingList.bind(this);
        this.removeParticipant = this.removeParticipant.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
      }

    handleSubmit(e) {
        e.preventDefault();
        Axios.patch(`http://localhost:8000/api/organism/offer/${this.props.match.params.id}`, 
        {name: this.state.name, description: this.state.description, address: this.state.address, date: this.state.date, n_places: this.state.n_places}, 
        {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
    }
    componentDidMount() {
        this.getOffer();
    }
    getOffer() {
        Axios.get('http://localhost:8000/api/organism/offer/' + this.props.match.params.id, {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
       .then((success) => {
           this.setState({loading: false, participants: success.data.data.participants, offer: success.data.data.offer, organization: success.data.data.offer.organization, nPlaces: success.data.data.n_places});
            this.setState({name: this.state.offer.name, description: this.state.offer.description, address: this.state.offer.address, date: this.state.offer.date, n_places: this.state.offer.n_places})
            }, (error) => {
           this.props.history.push('/orgnisme/offres');
       })
    }

    removeParticipant(id, e) {
        e.persist();
        Axios.delete('http://localhost:8000/api/participant/' + id, {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
        .then((success) => {
            store.addNotification({
                message: 'Vous avez bien supprimé ce participant !',
                type: 'success',
                container: 'top-right'
            })
            e.target.parentElement.innerHTML = ""
        },
        (error) => {
            store.addNotification({
                title: 'Erreur !',
                message: error.response.data.error,
                type: 'danger',
                container: 'top-right'
            })
        })
    }

    renderParticipants() {
        var participants = this.state.participants;
        var middleBlock = ""
        var Aparticipants = ""
        var Wparticipants = ""
        if(participants !== null){
            return participants.map((participant) => {
                if(participant.waiting_list == 0) {
                     return (
                        <div className="offer-participant active-list" key={participant.id}>
                            <span>{participant.user.firstname + " " + participant.user.lastname} ({participant.user.email})</span>
                            <a className="delete is-medium" onClick={this.removeParticipant.bind(this, participant.id)}></a>
                        </div>
                        )
                }
               
            })
            

            console.log(Aparticipants)
            return Aparticipants + middleBlock + Wparticipants;
        } else {
            return 'Aucun participants enregistrés...'
        }
    }

    renderWaitingList() {
        var participants = this.state.participants;
        if(this.state.nPlaces < 0) {
            return (
                <React.Fragment>
                     <h2 class="subtitle">En attente</h2>
                    {participants.map((participant) => {
                        if(participant.waiting_list == 1) {
                             return (
                                <div className="offer-participant" key={participant.id}>
                                    <span>{participant.user.firstname + " " + participant.user.lastname} ({participant.user.email})</span>
                                    <a className="delete is-medium" onClick={this.removeParticipant.bind(this, participant.id)}></a>
                                </div>
                                )
                        }  
                    })}
                </React.Fragment>
            )
        }
    }

    render() {
        //var particpants =
        return (
            <Dashboard loading={this.state.loading}>
                <div className="columns">
                    <div className="column is-half">
                        <h2 className="subtitle">Gérer l'offre</h2>
                        <form className="user-form offer-update-form" onSubmit={this.handleSubmit}>
                        <label>Titre de l'offre :</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input> <br />
                        <label>Description de l'offre :</label>
                        <textarea type="text" name="description" value={this.state.description} onChange={this.handleChange}></textarea> <br />
                        <label>Adresse de l'offre :</label>
                        <input type="text" name="address" value={this.state.address} onChange={this.handleChange}></input> <br />
                        <label>Date de l'offre :</label>
                        <input type="date" name="date" value={this.state.date} onChange={this.handleChange}></input> <br />
                        <label>Nombre de places disponibles :</label>
                        <input type="number" name="n_places" value={this.state.n_places} onChange={this.handleChange}></input>
                        <Button type="primary">Soumettre les changements</Button>
                        </form>
                    </div>
                    <div className="column is-half">
                        <h2 className="subtitle">Participants</h2>
                        {this.renderParticipants()}
                        {this.renderWaitingList()}
                    </div>
                </div>
            </Dashboard>
        )
    }
}

export default withRouter(OrganismOffer)
