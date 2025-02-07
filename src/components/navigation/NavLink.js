import React, { Component } from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'

export class NavLink extends Component {
    render() {
        return (
            <div className="navbar-item">
                <Link to={this.props.to}>{this.props.children}</Link>
            </div>
        )
    }
}

export default NavLink
