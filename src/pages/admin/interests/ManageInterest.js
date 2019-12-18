import React, { Component } from 'react'
import Dashboard from '../../Dashboard';
import Axios from 'axios';
import {withRouter} from 'react-router-dom'

export class ManageInterest extends Component {

    getInterest() {
        Axios.get('http://localhost:8000/api/interest/' + this.props.match.params.id)
    }
    render() {
        return (
            <Dashboard>
            </Dashboard>
        )
    }
}

export default withRouter(ManageInterest)
