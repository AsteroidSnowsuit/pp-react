import React, { Component } from 'react'

export class UserInfo extends Component {
    render() {
        return (
            <div class="user-info">
                <div class="user-picture"></div>
                <div class="user-text">
                    <div class="user-description">
                        <span class="user-name">{this.props.firstname + ' ' + this.props.lastname}</span>
                        <span class="user-occupation">{this.props.occupation}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo
