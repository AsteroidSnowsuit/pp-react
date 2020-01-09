import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Dashboard from '../Dashboard'
import Axios from 'axios'
import * as Cookies from 'js-cookie'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import Button from '../../components/Button';
import ErrorLine from '../../components/ErrorLine'
import ErrorContainer from '../../components/ErrorContainer'
import { addAlgolia, handleChange, addInterest } from 'utils'
import InterestList from '../../components/register/InterestList'
import PopupDelete from '../../components/offer/PopupDelete'
import PopupArchive from '../../components/offer/PopupArchive';
import AWN from "awesome-notifications"


export class OrganismOffer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            minimumAge: 0,
            offer: [],
            organization: [],
            participants: [],
            name: "",
            description: "",
            n_places: '',
            address: '',
            date: '',
            interests: {}
        }
        this.getOffer = this.getOffer.bind(this)
        this.renderParticipants = this.renderParticipants.bind(this);
        this.renderWaitingList = this.renderWaitingList.bind(this);
        this.removeParticipant = this.removeParticipant.bind(this);
        this.addInterest = addInterest.bind(this);
        this.handleChange = handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addAlgolia = addAlgolia.bind(this);
        this.reorganizeParticipants = this.reorganizeParticipants.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({loading: true})
        Axios.patch(`http://localhost:8000/api/organism/offer/${this.props.match.params.id}`, 
        {
            name: this.state.name,
            description: this.state.description,
            address: this.state.address,
            date: this.state.date,
            n_places: this.state.n_places,
            minimumAge: this.state.minimumAge,
            interests: this.state.interests
        },
        {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}}).then((success) => {
            this.props.history.push("/organisme/offres/" + this.props.match.params.id);
            this.setState({errors: [], loading:false})
        }, (error) => {
            store.addNotification({
                title: 'Erreur !',
                message: error.response.data.error,
                type: 'danger',
                container: 'top-right'
            })
            this.setState({loading: false, errors: error.response.data.data});
        })
    }

    componentDidMount() {
        this.setState({loading: true})
        this.getOffer();
        this.addAlgolia()
    }

    getOffer() {
        this.setState({loading: true});
        Axios.get('http://localhost:8000/api/organism/offer/' + this.props.match.params.id, {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
       .then((success) => {
           this.setState({
               loading: false,
               participants: success.data.data.participants,
               offer: success.data.data.offer,
               organization: success.data.data.offer.organization,
               nPlaces: success.data.data.nPlaces,
               minimumAge: success.data.data.offer.minimumAge,
               ointerests: success.data.data.interests
           });
            this.setState({
                name: this.state.offer.name,
                description: this.state.offer.description,
                address: this.state.offer.address,
                date: this.state.offer.date,
                n_places: this.state.offer.n_places
            })
            }, (error) => {
           this.props.history.push('/organisme/offres');
       })
    }

    reorganizeParticipants() {
        this.setState((prevState, props) => {
            var participants = prevState.participants;
            for(var i = 0; i < participants.length; i++) {
                if(i < prevState.offer.n_places) {
                    participants[i].waiting_list = 0;
                } else {
                    participants[i].waiting_list = 1;
                }
            }
            return {participants: participants};
            
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
            this.setState((prevState, props) => {
                var participants = prevState.participants.filter(p => p.id != id)
                return {participants: participants}
            })
            this.reorganizeParticipants();
            //.target.parentElement.parentNode.removeChild(e.target.parentElement);
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
                        <input type="text" id="address-input" name="address" value={this.state.address} onChange={this.handleChange}></input> <br />
                        <label>Date de l'offre :</label>
                        <input type="date" name="date" value={this.state.date} onChange={this.handleChange}></input> <br />
                        <label>Nombre de places disponibles :</label>
                        <input type="number" name="n_places" value={this.state.n_places} onChange={this.handleChange}></input>
                        <label className="is-size-4">Âge minimum pour participer : </label><input type="number" name="minimumAge" value={this.state.minimumAge} onChange={this.handleChange} />
                        <InterestList onClick={this.addInterest} alreadyChecked={this.state.ointerests} /> 
                        <ErrorContainer errors={this.state.errors} />
                        <Button type="primary">Soumettre les changements</Button>
                        <PopupDelete history={this.props.history} id={this.state.offer.id}/>
                        <PopupArchive notifier={this.notifier} history={this.props.history} id={this.state.offer.id}/>
                        </form>
                    </div>
                    <div className="column is-half organism-offer-participants">
                        <h2 className="subtitle ">Participants</h2>
                        <div>
                            {this.renderParticipants()}
                        </div>
                        <div class="organism-offer-waitinglist">
                            {this.renderWaitingList()}
                        </div>
                    </div>
                </div>
            </Dashboard>
        )
    }
}

export default withRouter(OrganismOffer)
