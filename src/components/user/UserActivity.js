import React, { Component } from 'react'

export class UserActivity extends Component {
    render() {
        return (
            <div class="user-activity">
                <img src={require('../../img/user/hands.svg')} />
                <div class="user-activity-text">
                    <span class="user-activity-title">Micheal Drapeau a fait du bénévolat !</span>
                    <span class="user-activity-offer">Télérecrutement chez Héma-Québec</span>
                    <span class="user-activity-date">19 JANVIER 2019</span>
                </div>
            </div>
        )
    }
}

export default UserActivity
