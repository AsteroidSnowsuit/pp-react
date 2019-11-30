import React, { Component } from 'react'

export class UserActivity extends Component {
    render() {
        return (
            <div class="user-activity">
                <img src={require('../../img/user/hands.svg')} />
                {this.props.participations}
                <div class="user-activity-text">
                    <span class="user-activity-title">{this.props.firstname + ' ' + this.props.lastname} a fait du bénévolat !</span>
                    <span class="user-activity-offer">{this.props.title} chez {this.props.organization}</span>
                    <span class="user-activity-date">{this.props.date}</span>
                </div>
            </div>
        )
    }
}

export default UserActivity
