import Axios from 'axios';
import * as Cookies from 'js-cookie';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Dashboard from '../../Dashboard';
import Button from './../../../components/Button';
import ErrorContainer from './../../../components/ErrorContainer'
import {handleChange} from 'utils'

export class ManageInterest extends Component {

    constructor(props) {
        super(props);
        this.state = {loading: true, interest: []}
        this.getInterest = this.getInterest.bind(this);
        this.handleChange = handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.getInterest()
    }

    getInterest() {
        Axios.get('http://localhost:8000/api/interests/' + this.props.match.params.id)
        .then((success) => {
            var interest = success.data.data.interest;
            this.setState({name: interest.name, picture_src: interest.picture_src, loading: false})
        }, (error) => {

        })
    }

    handleSubmit(e) {
        this.setState({loading: true});
        e.preventDefault();
        Axios.patch('http://localhost:8000/api/interests/' + this.props.match.params.id, {
            name: this.state.name,
            picture_src: this.state.picture_src
        }, {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
        .then((success) => {
            this.setState({loading: false});
        }, (error) => {
            this.setState({'errors' : error.response.data.data})
            this.setState({loading: false});
        })
    }

    handleDelete(e) {
        this.setState({loading: true});
        Axios.delete('http://localhost:8000/api/interests/' + this.props.match.params.id, {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
        .then((success) => {
            this.props.history.push('/admin/interests')
        })
    }

    render() {
        return (
            <Dashboard loading={this.state.loading}>
                <h1 className="title">{this.state.interest.name}</h1>
                <form onSubmit={this.handleSubmit} className="fullbox-form user-form">
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Titre de l'intérêt"></input><br />
                    <input type="text" name="picture_src" value={this.state.picture_src} onChange={this.handleChange} placeholder="Lien vers l'image"></input><br />
                    <Button loading={this.state.loading} type="primary">Soumettre les changements</Button>
                    <Button noSubmit={true} onClick={this.handleDelete} loading={this.state.loading} type="danger">Supprimer</Button>
                </form>
                <ErrorContainer errors={this.state.errors} />
            </Dashboard>
        )
    }
}

export default withRouter(ManageInterest)
