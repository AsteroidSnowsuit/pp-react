import React, { Component } from 'react'
import DashboardNavigation from '../components/navigation/DashboardNavigation'
import $ from 'jquery'

export class Dashboard extends Component {
    render() {
        $('body').addClass('dashboard');
        return (
            <div class="container dashboard">
                <DashboardNavigation />
                
            </div>
        )
    }

    componentWillUnmount() {
        $('body').removeClass('dashboard');
    }
}

export default Dashboard
