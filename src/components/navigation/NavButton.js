import React, { Component } from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'
import LinkButton from '../LinkButton';

export class NavLink extends Component {
    render() {
        return (
            <div className="navbar-item">
                <LinkButton type="primary" shape="rounded" destination={this.props.to}>{this.props.children}</LinkButton>
            </div>
        )
    }
}

export default NavLink