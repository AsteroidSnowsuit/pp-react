import React, { Component } from 'react'

export class UserInfo extends Component {
    render() {
        return (
            <div className="user-info">
                <div className="user-picture"></div>
                <div className="user-text">
                    <div className="user-description">
                        <span className="user-name">{this.props.firstname + ' ' + this.props.lastname}</span>
                        <span className="user-occupation">{this.props.occupation}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo
