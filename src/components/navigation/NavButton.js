import React, { Component } from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'

export class NavLink extends Component {
    render() {
        return (
            <div className="navbar-item">
                <div className="button is-primary is-rounded">
                    <Link to={this.props.to}>{this.props.children}</Link>
                </div>
            </div>
        )
    }
}

export default NavLink