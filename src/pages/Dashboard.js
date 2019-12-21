import React, { Component } from 'react'
import DashboardNavigation from '../components/navigation/DashboardNavigation'
import $ from 'jquery'
import DashboardLoading from '../../src/pages/loading/DashboardLoading'
import * as Cookies from 'js-cookie'
import AdminTools from '../components/admin/AdminTools'

export class Dashboard extends Component {
    render() {
        $('body').addClass('dashboard');
        return (
            <DashboardLoading loading={this.props.loading}>
                <div className="container dashboard">
                    <DashboardNavigation organism={Cookies.get('organism')} />
                    {this.props.children}
                </div>
                <AdminTools />
            </DashboardLoading>
        )
    }
}

export default Dashboard
