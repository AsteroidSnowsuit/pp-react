import React, { Component } from 'react'
import Homepage from '../Homepage'
import Dashboard from '../Dashboard'
import Axios from 'axios'
import * as Cookies from 'js-cookie'
import ResultBox from '../../components/search/ResultBox'
import $ from 'jquery'

export class SmartSearch extends Component {

    constructor(props) {
        super(props);
        this.getOffers = this.getOffers.bind(this);
        this.state = {loading: true, offers: [], filters: []}
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount() {
        this.getOffers();
        $('.dropdown-item').click(function() {
            $(this).toggleClass('is-active');
        })
        $('.dropdown-one').click(function() {
            $('.dropdown-one').removeClass('is-active');
            $(this).addClass('is-active');
        })
    }

    getOffers() {
        Axios.post('http://localhost:8000/api/search/smart', {order: this.state.sorter, filters: this.state.filters}, {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
        .then((success) => {
            this.setState({loading: false, offers : success.data.data.offers})

        }, (error) => {

        })
    }

    handleFilter(e) {
        e.preventDefault();
        e.persist();
        var filter = e.target.getAttribute('data-filter')
        this.setState({loading: true});
        if(this.state.filters.indexOf(filter) == -1) {
            this.setState((state) => {
                state.filters.push(filter);
                return {filters: state.filters}
            }, () => {
                console.log(JSON.stringify(this.state.filters))
                this.getOffers();
            })
        } else {
            this.setState((state) => {
                state.filters.splice(state.filters.indexOf(filter), 1);
            }, () => {
                console.log(JSON.stringify(this.state.filters))
                this.getOffers();
            })
        }
    }

    render() {
        return (
            <Dashboard loading={this.state.loading}>
                <div className="columns is-multiline">
                    <div className="column is-6 is-12-mobile">
                    <p>La recherche intelligente trouve des offres correspondants à vos intérêts renseignés sur votre profil. La recherche intelligente place les offres qui correpondent le plus à vos intérêts en premier et exlcuent les offres pour lesquelles vous n'avez pas l'âge requis.</p>
                    </div>
                    <div className="column is-12">
                    <div className="level">
                        <div className="level-left">
                            <h2 className="subtitle">Résultats de recherche</h2>
                        </div>
                        <div className="level-right">
                            <div className="filter">
                                <div class="dropdown is-right is-hoverable">
                                <div class="dropdown-trigger">
                                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                    <span>Filtres</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                    </button>
                                </div>
                                <div class="dropdown-menu is-right" id="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                    <a href="#" onClick={this.handleFilter} data-filter="no-wait" class="dropdown-item">
                                        cacher files d'attente
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-multiline">
                        {this.state.offers.map((offer) => {
                        return (
                            <div className="column is-12">
                                <ResultBox organism={false} key={offer.id} offer={offer}></ResultBox>
                            </div>
                        )
                        })}
                    </div>
                    </div>
                </div>
            </Dashboard>
        )
    }
}

export default SmartSearch
