import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import UserBanner from '../../components/user/UserBanner'

export class UserProfile extends Component {
    render() {
        return (
            <Dashboard>
                <UserBanner />
            </Dashboard>
        )
    }
}

export default UserProfile
