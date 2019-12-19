import React, { Component } from 'react'
import Dashboard from './../../../pages/Dashboard'
import Button from '../../../components/Button';
import Axios from 'axios';
import {withRouter} from 'react-router-dom'
import * as Cookies from 'js-cookie'
import ErrorContainer from './../../../components/ErrorContainer'

export class AddInterest extends Component {

    constructor(props) {
        super(props)
        this.state = {name: "", picture_src: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        Axios.post('http://localhost:8000/api/interests', {
            name: this.state.name,
            picture_src: this.state.picture_src
        }, {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
        .then((success) => {
            this.props.history.push("/admin/interests");
        }, (error) => {
            this.setState({'errors' : error.response.data.data})
        })
        
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Dashboard>
                <h1 className="title">Ajouter un intérêt</h1>
                <form onSubmit={this.handleSubmit} className="fullbox-form user-form">
                    <input type="text" name="name" onChange={this.handleChange} placeholder="Titre de l'intérêt"></input><br />
                    <input type="text" name="picture_src" onChange={this.handleChange} placeholder="Lien vers l'image"></input><br />
                    <Button type="primary">Soumettre le formulaire</Button>
                </form>
                <ErrorContainer errors={this.state.errors} />
            </Dashboard>
        )
    }
}

export default withRouter(AddInterest)
