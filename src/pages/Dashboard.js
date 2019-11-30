import React, { Component } from 'react'
import DashboardNavigation from '../components/navigation/DashboardNavigation'
import $ from 'jquery'
import DashboardLoading from '../../src/pages/loading/DashboardLoading'


export class Dashboard extends Component {
    render() {
        $('body').addClass('dashboard');
        return (
            <DashboardLoading loading={this.props.loading}>
                <div class="container dashboard">
                    <DashboardNavigation />
                    {this.props.children}
                </div>
            </DashboardLoading>
        )
    }
}

export default Dashboard
