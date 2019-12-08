import React, { Component } from 'react'

export class UserActivity extends Component {
    render() {
        return (
            <div className="user-activity">
                <img src={require('../../img/user/hands.svg')} />
                {this.props.participations}
                <div className="user-activity-text">
                    <span className="user-activity-title">{this.props.firstname + ' ' + this.props.lastname} a fait du bénévolat !</span>
                    <span className="user-activity-offer">{this.props.title} chez {this.props.organization}</span>
                    <span className="user-activity-date">{this.props.date}</span>
                </div>
            </div>
        )
    }
}

export default UserActivity
