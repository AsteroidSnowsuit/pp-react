import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import Axios from 'axios'
import * as Cookies from 'js-cookie'

export class OrganismOffers extends Component {

    componentDidMount() {
        Axios.get('http://localhost:8000/api/organism/offers', {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
    }
    render() {
        return (
            <Dashboard>

            </Dashboard>
        )
    }
}

export default OrganismOffers
