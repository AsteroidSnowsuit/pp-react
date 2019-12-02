import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Dashboard from '../Dashboard';
import * as Cookies from 'js-cookie'
import ErrorContainer from '../../components/ErrorContainer';
import axios from 'axios'

export class AddOrganism extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', description: '', address: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        axios.post('http://localhost:8000/api/organism/create', 
        {name: this.state.name, description: this.state.description, address : this.state.address}, {headers: {"Accept": 'application/json', "Authorization": `Bearer ${token}`}}).then(
            (success) => {
                this.setState({loading: false});
                //this.props.history.push('/organisme')
            }, (error) => {
                this.setState({errors : error.response.data.data})
                if(error.response.data.redirect != "") {
                    this.props.history.push(error.response.data.redirect)
                }
            }
        )
    }

    render() {
        return (
            <Dashboard>
                <section className="section has-text-centered">
                    <div className="column is-offset-1 is-10">
                    <h1 className="title is-size-1 register-title">Enregistrement d'un organisme</h1>
                        <section className="section organism-register">
                    <form className="user-form fullbox-form" method="POST" onSubmit={this.handleSubmit}>
                            <div className="has-text-left">
                            <label className="is-size-4">Nom de l'organisme : </label><input type="text" name="name" placeholder="Nom de l'organisme" value={this.state.name} onChange={this.handleChange}/>
                            <label className="is-size-4">Description de l'organisme : </label><textarea name="description" placeholder="Description de l'organisme" value={this.state.description} onChange={this.handleChange}/>
                            <label className="is-size-4">Adresse de l'organisme : </label><input type="text" name="address" value={this.state.address} onChange={this.handleChange}></input>
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

export default withRouter(AddOrganism)
