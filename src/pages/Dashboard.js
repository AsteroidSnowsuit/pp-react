import React, { Component } from 'react'
import DashboardNavigation from '../components/navigation/DashboardNavigation'
import $ from 'jquery'

export class Dashboard extends Component {
    componentDidUpdate() {
        $('body').addClass('dashboard');
    }
    render() {
        return (
            <div class="container dashboard">
                <DashboardNavigation />
                
            </div>
        )
    }
}

export default Dashboard
