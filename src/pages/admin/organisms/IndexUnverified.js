import React, { Component } from 'react'
import { Admin } from '../Admin'
import Axios from 'axios';
import * as Cookies from 'js-cookie'
import Button from '../../../components/Button';

export class IndexUnverified extends Component {

    constructor(props) {
        super(props);
        this.state = {organisms: []}
        this.getOrganisms = this.getOrganisms.bind(this);
        this.verifyOrganism = this.verifyOrganism.bind(this);
        this.refuseOrganism = this.refuseOrganism.bind(this);
    }
    
    componentDidMount() {
        this.getOrganisms()
    }
    
    getOrganisms() {
        Axios.get('http://localhost:8000/api/organisms/unverified', {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}}).then(
            (success) => {
                this.setState({organisms: success.data.data.organisms})
            }
        )
    }

    verifyOrganism(id, e) {
        e.target.classList.add('is-loading');
        Axios.get('http://localhost:8000/api/organisms/' + id + '/verify', {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}}).then(
            (success) => {
                this.getOrganisms();
            }
        )
    }

    refuseOrganism(id, e) {
        e.target.classList.add('is-loading');
        Axios.get('http://localhost:8000/api/organisms/' + id + '/refuse', {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}}).then(
            (success) => {
                this.getOrganisms();
            }
        )
    }

    render() {
        return (
            <Admin>
                {Object.values(this.state.organisms).map((value) => {
                    return (<div class="admin-organism-container">
                        <span>ORGANISME :</span>
                        <p>NOM : {value.name}</p>
                        <p>DESCRIPTION :{value.description}</p>
                        <p>ADRESSE : {value.address}</p>
                        <br />
                        <span>OWNER :</span>
                        <p>EMAIL :{value.owner.email}</p>
                        <p>PRÉNOM :{value.owner.firstname}</p>
                        <p>NOM DE FAMILLE :{value.owner.lastname}</p>
                        <Button noSubmit={true} type="success" onClick={this.verifyOrganism.bind(this, value.id)}>Accepter</Button>
                        <Button noSubmit={true} type="danger" onClick={this.refuseOrganism.bind(this, value.id)}>Refuser</Button>
                    </div>)
                })}
            </Admin>
        )
    }
}

export default IndexUnverified
