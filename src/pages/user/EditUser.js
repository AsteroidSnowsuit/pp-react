import axios from 'axios';
import * as Cookies from 'js-cookie';
import React, { Component } from 'react';
import Button from '../../components/Button';
import Dashboard from '../Dashboard';
import ErrorContainer from '../../components/ErrorContainer';
import InterestList from '../../components/register/InterestList';

export class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, interests: []}
        this.addInterest = this.addInterest.bind(this);
        this.logState = this.logState.bind(this);
    }

    addInterest(id, name) {
        console.log('hoppity hippity you parenty')
        var mid = 'm' + id;
        console.log(this.state.interests[mid] == undefined)

        if(this.state.interests[mid] == undefined) {
            console.log(this.state);
            this.setState((state) => {
                state.interests[mid] = name;
                return {interests: state.interests}
            })
        } else {
            console.log('deleted')
            var newInterest = this.state.interests;
            delete newInterest[mid]
            this.setState({interests: newInterest})
        }
        console.log(this.state.interests)
    }

    componentDidMount() {
        var token = Cookies.get('token');
        axios.get('http://localhost:8000/api/details', {headers: {"Accept": 'application/json', "Authorization": `Bearer ${token}`}}).then(
            (success) => {
                this.setState({
                    loading: false,
                    firstname : success.data.data.user.firstname, 
                    lastname: success.data.data.user.lastname, 
                    email: success.data.data.user.email,
                    dob: success.data.data.user.dob,
                    address: success.data.data.user.address,
                    uinterests: success.data.data.interests
                })
            }, (error) => {
                this.props.history.push('/deconnexion');
            }
        )
        var places = require('places.js');
        var placesAutocomplete = places({
        appId: "plZJLSHIW8M5",
        apiKey: "0eddd2fc93b5429f5012ee49bcf8807a",
        container: document.querySelector('#address-input')
        });
    }

    logState() {
        console.log(this.state);
    }
    render() {
        return (
            <Dashboard loading={this.state.loading}>
                <h1 className="title">Modifier mon profil</h1>
                <form className="user-form offer-update-form" onSubmit={this.handleSubmit}>
                <label>Prénom :</label>
                <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange}></input> <br />
                <label>Nom de famille :</label>
                <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange}></input> <br />
                <label>Email :</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /><br />
                <label>Adresse :</label>
                <input type="address" id="address-input" name="address" value={this.state.address} onChange={this.handleChange} /><br />
                <label>Date de naissance :</label>
                <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} /><br />
                <InterestList alreadyChecked={this.state.uinterests} onClick={this.addInterest} />
                <ErrorContainer errors={this.state.errors} />
                <Button type="primary">Soumettre les changements</Button>
                </form>
                <Button type="danger" onClick={this.logState} />
            </Dashboard>
        )
    }
}

export default EditUser
