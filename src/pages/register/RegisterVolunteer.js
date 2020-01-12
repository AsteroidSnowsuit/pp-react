import React, { Component } from 'react'
import HomepageNavigation from '../../components/navigation/HomepageNavigation';
import InterestBox from '../../components/register/InterestBox';
import axios from 'axios'
import ErrorLine from '../../components/ErrorLine';
import Homepage from '../Homepage'
import Axios from 'axios';
import InterestList from '../../components/register/InterestList';
import {addInterest, handleChange} from 'utils'

export class RegisterVolunteer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            interests: {},
            dob: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            c_password: '',
            pinterests: {}
        }
        this.handleChange = handleChange.bind(this);
        this.addInterest = addInterest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getInterests() {
        var interests = (Object.keys(this.state.interests).map((key) => {
            return (<span className="interest-names" key={key}>{this.state.interests[key]}</span>)
        }))
        interests = interests.length > 0
        ? interests.reduce((prev, curr) => <>{prev}{', '}{curr}</>)
        : null;
        return interests
    }

    checkInfoFilled() {
        if(this.state.firstname != undefined && this.state.lastname != undefined && this.state.email != undefined) {
            return true;
        }
        else {
            return false;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.checkInfoFilled()) {
            axios.post("http://localhost:8000/api/register", 
            {
                interests: this.state.interests,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
                c_password: this.state.c_password,
                dob: this.state.dob
            },
            {headers : {Accept: 'application/json'}})
            .then((success) =>{
                this.props.history.push('/inscription/verifier-email')
            })
            .catch(error => {
               this.setState({'errors' : error.response.data.data})
            });
        }
    }
    
    render() {
        return (
            <Homepage>
                <section className="section has-text-centered">
                    <div className="column is-offset-1 is-10">
                    <form className="user-form" method="POST" onSubmit={this.handleSubmit}>
                        <h1 className="title is-size-1 register-title">Je suis un bénévole</h1>
                        <section className="section register-section">
                            <p>Clique sur les lignes pour y ajouter tes informations.</p>
                            <div className="has-text-left">
                            <p className="is-size-4">Je m'appelle <input type="text" name="firstname" placeholder="prénom" value={this.state.firstname} onChange={this.handleChange}/> <input type="text" name="lastname" placeholder="nom de famille" value={this.state.lastname} onChange={this.handleChange}/></p>
                            <p className="is-size-4">Je suis né le <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange}></input></p>
                            <p className="is-size-4">Mon adresse email est le <input type="email" name="email" placeholder="adresse email" value={this.state.email} onChange={this.handleChange} /></p>
                            </div>
                        </section>
                        <section className="section register-section">
                            <h2 className="register-title subtitle is-size-3">Mes centres d'intérêts</h2>
                            <p>Sélectionne tous tes intérêts en cliquant desuss.</p>
                            <InterestList onClick={this.addInterest} pinterests={this.state.pinterests} />
                        </section>
                        <section className="section register-section">
                            {this.checkInfoFilled() ? 
                            <div><h2 className="register-title subtitle is-size-3 has-text-centered">Vérifions vos informations</h2>
                            <p className="has-text-centered">Si une information n'est pas correcte, remonte et rectifie-la.</p>
                            <div className="has-text-left">
                            <p className="is-size-4">Votre nom est <span className="underlined">{this.state.firstname}</span> <span className="underlined">{this.state.lastname}</span></p>
                            <p className="is-size-4">Votre adresse email est le <span className="underlined">{this.state.email}</span>.</p>
                            <p className="is-size-4">Vous êtes interessé par : {this.getInterests()}</p>
                            <p className="is-size-4">Vous êtes né le {this.state.dob}</p>
                            <p className="is-size-4">Veuillez entrer votre mot de passe pour confirmer votre inscription.</p>
                            <input type="password" name="password" placeholder="Mot de passe" value={this.state.password} onChange={this.handleChange}></input><br />
                            <input type="password" name="c_password" placeholder="Confirmation de mot de passe" value={this.state.c_password} onChange={this.handleChange}></input><br />
                            <div className="error-container">
                            {(this.state.errors != undefined) ? Object.keys(this.state.errors).map((key, index) => (<ErrorLine>{this.state.errors[key]}</ErrorLine>)) : ""}
                            </div>
                            <button className="button is-primary has-text-left">Confirmer</button>
                            </div></div> : '' }      
                        </section>      
                        </form>
                    </div>
                </section>
            </Homepage>
        )
    }
}

export default RegisterVolunteer
