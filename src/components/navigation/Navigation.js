import React, { Component } from 'react'
import NavLink from './NavLink'
import { NavLogo } from './NavLogo';
import $ from 'jquery'
export class Navigation extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    }
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <NavLogo />
                    <a onClick={this.handleClick} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
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
