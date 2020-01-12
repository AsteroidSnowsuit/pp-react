import axios from 'axios';
import * as Cookies from 'js-cookie';
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Button from '../../components/Button';
import Dashboard from '../Dashboard';
import ErrorContainer from '../../components/ErrorContainer';
import InterestList from '../../components/register/InterestList';
import { addAlgolia, handleChange } from 'utils';

export class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {loading: true, interests: {}}
        this.addInterest = this.addInterest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = handleChange.bind(this);
        this.addAlgolia = addAlgolia.bind(this);
    }

    addInterest(id, name) {
        var mid = 'm' + id;
        if(this.state.interests[mid] == undefined) {
            this.setState((state) => {
                state.interests[mid] = name;
                return {interests: state.interests}
            }, () => {
            })
        } else {
            var newInterest = this.state.interests;
            delete newInterest[mid]
            this.setState({interests: newInterest})
        }
    }

    componentDidMount() {
        var token = Cookies.get('token');
        axios.get('https://api.volontarius.com/api/details', {headers: {"Accept": 'application/json', "Authorization": `Bearer ${token}`}}).then(
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
        this.addAlgolia()
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.patch("https://api.volontarius.com/api/details", 
        {
            interests: this.state.interests, 
            firstname: this.state.firstname, 
            lastname: this.state.lastname, 
            email: this.state.email,
            dob: this.state.dob,
            address: this.state.address
            },
        {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
        .then((success) =>{
            this.props.history.push('/profil')
        }, (error) => {
            this.setState({'errors' : error.response.data.data})
        });
    }
    render() {
        return (
            <Dashboard loading={this.state.loading}>
                <div className="columns">
                    <div className="column is-12">
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
                    </div>
                </div>
            </Dashboard>
        )
    }
}

export default withRouter(EditUser)
