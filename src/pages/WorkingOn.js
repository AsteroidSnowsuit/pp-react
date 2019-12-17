import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import LinkButton from '../components/LinkButton';

export class WorkingOn extends Component {
    render() {
        return (
            <div className="container">
                <div className="columns is-fullheight has-text-centered">
                    <div className="column is-vcentered is-4 is-offset-4 is-10-mobile is-offset-1-mobile">
                    <img src={require('../img/construction.svg')} />
                    <h1 className="title">En construction...</h1>
                    <h2 className="subtitle">Le site étant encore en ses débuts, certaines parties ne sont pas encore accessibles.</h2>
                    <LinkButton type="primary" destination="/">Retourner à la page d'accueil</LinkButton>
                </div>
                </div>
            </div>
        )
    }
}

export default WorkingOn
