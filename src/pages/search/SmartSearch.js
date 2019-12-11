import React, { Component } from 'react'
import Homepage from '../Homepage'
import Dashboard from '../Dashboard'
import Axios from 'axios'
import * as Cookies from 'js-cookie'
import ResultBox from '../../components/search/ResultBox'

export class SmartSearch extends Component {

    constructor(props) {
        super(props);
        this.getOffers = this.getOffers.bind(this);
        this.state = {loading: true, offers: []}
    }

    componentDidMount() {
        this.getOffers();
    }

    getOffers() {
        Axios.post('http://localhost:8000/api/search/smart', {}, {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
        .then((success) => {
            this.setState({loading: false, offers : success.data.data.offers})

        }, (error) => {

        })
    }
    render() {
        return (
            <Dashboard loading={this.state.loading}>
                {this.state.offers.map((offer) => {
                   return (
                    <ResultBox key={offer.id} offer={offer}></ResultBox>
                   )
                })}
            </Dashboard>
        )
    }
}

export default SmartSearch
