import React, { Component } from 'react'
import HomepageNavigation from '../../components/navigation/HomepageNavigation';
import {Link} from 'react-router-dom'
import Homepage from '../Homepage';

export class Register extends Component {
    render() {
        return (
            <Homepage>
                <section className="section has-text-centered">
                    <h1 className="title is-size-1">Je suis un...</h1>
                    <div className="columns register-columns">
                        <div className="column is-5 is-offset-1">
                            <Link to="/inscription/benevole">
                                    <img src={require('../../img/volunteer.svg')}></img>
                                    <h2 className="subtitle is-size-2 ">bénévole</h2>
                            </Link> 
                        </div>
                        <div className="column is-5">
                            <Link to="/inscription/organisme">
                                    <img src={require('../../img/organism.svg')}></img>
                                    <h2 className="subtitle is-size-2 ">organisme</h2>
                            </Link>
                        </div>
                    </div>
                </section>
            </Homepage>
        )
    }
}

export default Register
