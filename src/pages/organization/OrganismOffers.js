import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Dashboard from '../Dashboard'
import Axios from 'axios'
import * as Cookies from 'js-cookie'
import ResultBox from '../../components/search/ResultBox';

export class OrganismOffers extends Component {

    constructor(props) {
        super(props);
        this.state = {offers: []}
    }
    componentDidMount() {
        Axios.get('http://localhost:8000/api/organism/offers', {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
        .then((success) => {
            console.log(success)
            this.setState({offers : success.data.data.offers})
        })
    }
    render() {
        return (
            <Dashboard>
                {this.state.offers.map((offer) => {
                   return (
                    <ResultBox offer={offer}></ResultBox>
                   )
                })}
            </Dashboard>
        )
    }
}

export default OrganismOffers
