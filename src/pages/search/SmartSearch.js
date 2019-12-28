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
        this.state = {loading: true, offers: [], filters: [], activeSorter: ''}
        this.handleSorter = this.handleSorter.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount() {
        this.getOffers();
    }

    getOffers() {
        Axios.post('http://localhost:8000/api/search/smart', {order: this.state.sorter, filters: this.state.filters}, {headers: {Accept: 'application/json', Authorization: 'Bearer ' + Cookies.get('token')}})
        .then((success) => {
            this.setState({loading: false, offers : success.data.data.offers})

        }, (error) => {

        })
    }

    handleSorter(e) {
        e.preventDefault();
        e.persist();
        this.setState({loading: true});
        this.setState({activeSorter : e.target.innerText})
        var sorter = e.target.getAttribute('data-sorter')
        this.setState({sorter: sorter}, () => {
            this.getOffers();
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
                <div className="level">
                    <div className="level-left">
                        <h2 className="subtitle">Résultats de recherche</h2>
                    </div>
                    <div className="level-right">
                        <div className="sortBy">
                            <span>Trier par</span>
                            <div class="dropdown is-right is-hoverable">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>{(this.state.activeSorter !== "" ? this.state.activeSorter : 'sélectionner')}</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                <a class="dropdown-item" onClick={this.handleSorter} data-sorter="date-asc">
                                    date (le plust tôt)
                                </a>
                                <a class="dropdown-item" onClick={this.handleSorter} data-sorter="date-desc">
                                    date (le plus tard)
                                </a>
                                <a class="dropdown-item" onClick={this.handleSorter} data-sorter="places-desc">
                                    places disponibles (le plus)
                                </a>
                                <a class="dropdown-item" onClick={this.handleSorter} data-sorter="places-asc">
                                    places disponibles (le moins)
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
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
                                {/* <a href="#" onClick={this.handleFilter} data-filter="age-restriction" class="dropdown-item">
                                    afficher les offres adaptées à mon âge
                                </a> */}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
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
