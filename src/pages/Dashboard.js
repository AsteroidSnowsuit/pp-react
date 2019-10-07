import React, { Component } from 'react'
import DashboardNavigation from '../components/navigation/DashboardNavigation'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <DashboardNavigation />
                This is the dashboard for connected users.
            </div>
        )
    }
}

export default Dashboard
