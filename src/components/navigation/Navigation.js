import React, { Component } from 'react'
import NavLink from './NavLink'
import { NavLogo } from './NavLogo';

export class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLogo />
                <div id="links">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Navigation
