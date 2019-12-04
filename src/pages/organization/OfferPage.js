import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import {withRouter} from 'react-router-dom'
import Axios from 'axios'
import * as Cookies from 'js-cookie'

export class OfferPage extends Component {

    constructor(props) {
        super(props);
        this.state = {loading: true, offer: [], organization: []}
    }
    componentDidMount() {
       Axios.get('http://localhost:8000/api/offer/' + this.props.match.params.id, {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
       .then((success) => {
           this.setState({loading: false, offer: success.data.data.offer, organization: success.data.data.offer.organization, nPlaces: success.data.data.n_places});
       })
    }
    render() {
        return (
            <Dashboard loading={this.state.loading}>
                <div className="levels offer-header">
                    <div className="level-left">
                        <h1 className="title">{this.state.offer.name}</h1>
                        <span className="subtitle">{this.state.organization.name}</span>
                        <p>{this.state.offer.description}</p>
                    </div>
                    <div className="level-right">
                        <img src={require('../../img/user/hands.svg')} />
                    </div>
                </div>
                <div class="columns">
                    <div className="column is-8 nbPlaces">
                        <h2 class="subtitle is-3">Inscription</h2>
                        <div>
                            {(this.state.nPlaces > 0) ? 
                            <React.Fragment>
                                Il reste <span>{this.state.nPlaces} places</span> disponibles.<br />
                                <div className="button is-primary">S'insrire seul</div>
                            </React.Fragment> :
                            <React.Fragment>
                                Il y a <span>{this.state.nPlaces} utilisateurs</span> dans la file d'attente.
                                <div className="button is-primary">S'insrire dans la file d'attente</div>
                            </React.Fragment>}
                        </div>
                    </div>
                    <div className="column is-4 offer-map">
                        L'offre est située au {this.state.offer.address}
                        
                    </div>
                </div>
            </Dashboard>
        )
    }
}

export default withRouter(OfferPage)
