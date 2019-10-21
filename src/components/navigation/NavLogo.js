import React, { Component } from 'react'

export class NavLogo extends Component {
    render() {
        return (
            <div>
                <img className="column is-vcentered nav-logo" src={require('../../img/logo.svg')}></img>
            </div>
        )
    }
}

export default NavLogo
