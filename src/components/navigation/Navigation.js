import React, { Component } from 'react'
import NavLink from './NavLink'
import { NavLogo } from './NavLogo';

export class Navigation extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <NavLogo />
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        {this.props.children}  
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation
