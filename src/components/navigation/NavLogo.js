import React, { Component } from 'react'

export class NavLogo extends Component {
    render() {
        return (
            <div>
                <img className="column is-vcentered nav-logo" src={this.props.dashboard ? require('../../img/logo-dashboard.svg') : require('../../img/logo.svg')}></img>
            </div>
        )
    }
}

export default NavLogo
