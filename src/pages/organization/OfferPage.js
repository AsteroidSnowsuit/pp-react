import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import Axios from 'axios'

export class OfferPage extends Component {

    componentDidMount() {
        Axios.get('http://localhost:8000/offer/' + id)
    }
    render() {
        return (
            <Dashboard>
                Titre de l'offre : 
            </Dashboard>
        )
    }
}

export default OfferPage
