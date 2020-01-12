import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import HomepageNavigation from '../../components/navigation/HomepageNavigation';
import axios from 'axios'
import ErrorLine from '../../components/ErrorLine'
import Homepage from '../Homepage';
import { addAlgolia, handleChange } from 'utils';

export class RegisterOrganism extends Component {

    constructor(props) {
        super(props)
        this.state = {interests: {}}
        this.handleChange = handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addAlgolia = addAlgolia.bind(this);
    }

    componentDidMount() {
        this.addAlgolia()
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", 
        {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            c_password: this.state.c_password,
            dob: this.state.dob,
            organismMember: true
        },
        {headers : {Accept: 'application/json'}})
        .then((success) =>{
            this.props.history.push('/inscription/verifier-email')
        }, (error) => {
            this.setState({'errors' : error.response.data.data})
        });
    }

    render() {
        return (
            <Homepage>
                <section className="section has-text-centered">
                    <div className="column is-offset-1 is-10">
                    <h1 className="title is-size-1 register-title">Inscription des organismes</h1>
                        <section className="section organism-register">
                    <form className="user-form fullbox-form" method="POST" onSubmit={this.handleSubmit}>
                            <div className="has-text-left input-fixer">
                            <label className="is-size-4">Prénom : </label><input type="text" name="firstname" placeholder="Prénom" value={this.state.firstname} onChange={this.handleChange}/>
                            <label className="is-size-4">Nom de famille : </label><input type="text" name="lastname" placeholder="Nom de famille" value={this.state.lastname} onChange={this.handleChange}/>
                            <label className="is-size-4">Date de naissance : </label><input type="date" name="dob" value={this.state.dob} onChange={this.handleChange}></input>
                            <label className="is-size-4">Adresse de travail : </label><input id="address-input" type="text" name="address" placeholder="Adresse" value={this.state.address} onChange={this.handleChange}/>
                            <label className="is-size-4">Adresse email : </label><input type="email" name="email" placeholder="Adresse email" value={this.state.email} onChange={this.handleChange} />
                            <label className="is-size-4">Mot de passe : </label><input type="password" name="password" placeholder="Mot de passe" value={this.state.password} onChange={this.handleChange}></input>
                            <label className="is-size-4">Confirmation de mot de passe : </label><input type="password" name="c_password" placeholder="Confirmation de mot de passe" value={this.state.c_password} onChange={this.handleChange}></input>                     
                            </div>
                            {(this.state.errors != undefined) ? Object.keys(this.state.errors).map((key, index) => (<ErrorLine>{this.state.errors[key]}</ErrorLine>)) : ""}
                            <button className="button is-primary has-text-left">Soumettre le formulaire</button>
                        </form>
                        </section>
                    </div>
                </section>
            </Homepage>
        )
    }
}

export default withRouter(RegisterOrganism)
