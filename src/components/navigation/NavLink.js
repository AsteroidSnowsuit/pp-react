import React, { Component } from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'

export class NavLink extends Component {
    render() {
        return (
            <div>
                <Link to={this.props.to}>{this.props.children}</Link>
            </div>
        )
    }
}

export default NavLink
