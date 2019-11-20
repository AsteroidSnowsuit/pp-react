import React, { Component } from 'react'

export class UserInfo extends Component {
    render() {
        return (
            <div class="user-info">
                <div class="user-picture"></div>
                <div class="user-text">
                    <div class="user-description">
                        <span class="user-name">Michel Drapeau</span>
                        <span class="user-occupation">Héma-Québec</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo
