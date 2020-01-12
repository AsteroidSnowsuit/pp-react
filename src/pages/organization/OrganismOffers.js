import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Dashboard from '../Dashboard'
import Axios from 'axios'
import * as Cookies from 'js-cookie'
import ResultBox from '../../components/search/ResultBox';
import Button from '../../components/Button'
import LinkButton from '../../components/LinkButton'
import {withRouter} from 'react-router-dom'

export class OrganismOffers extends Component {

    constructor(props) {
        super(props);
        this.state = {offers: []}
    }
    componentDidMount() {
        this.setState({loading: true})
        Axios.get('https://api.volontarius.com/api/organism/offers', {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
        .then((success) => {
            this.setState({loading: false, offers : success.data.data.offers})
        }, (error) => {
            this.props.history.push('/tableaudebord');
        })
    }
    render() {
        return (
            <Dashboard loading={this.state.loading}>
                <LinkButton type="primary" destination="/organisme/offres/nouvelle">Ajouter une nouvelle offre</LinkButton>
                <div className="offers-container">
                    <p>Les offres ayant un fond jaune sont archivées. Vous ne pouvez pas les modifier ou les supprimer et les utilisateurs ne peuvent pas les voir.</p>
                    <div className="columns">

                    </div>
                    {this.state.offers.map((offer) => {
                    return (
                        <div className="column is-12">
                            <ResultBox organism={true} offer={offer}></ResultBox>
                        </div>
                    )
                    })}
                </div>
            </Dashboard>
        )
    }
}

export default withRouter(OrganismOffers)
