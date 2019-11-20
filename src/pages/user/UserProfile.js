import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import UserBanner from '../../components/user/UserBanner'
import UserInfo from '../../components/user/UserInfo';
import UserButtons from '../../components/user/UserButtons'
import UserActivity from '../../components/user/UserActivity'

export class UserProfile extends Component {
    render() {
        return (
            <Dashboard>
                <div className="user-header">
                    <UserBanner />
                    <UserInfo />
                    <UserButtons />
                </div>
                <div className="columns">
                    <div className="user-body column is-6 is-offset-1">
                        <UserActivity />
                    </div>
                </div>

            </Dashboard>
        )
    }
}

export default UserProfile
