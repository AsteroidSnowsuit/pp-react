import React, { Component } from 'react'
import DashboardNavigation from '../components/navigation/DashboardNavigation'
import $ from 'jquery'
import DashboardLoading from '../../src/pages/loading/DashboardLoading'
import * as Cookies from 'js-cookie'

export class Dashboard extends Component {
    render() {
        $('body').addClass('dashboard');
        return (
            <DashboardLoading loading={this.props.loading}>
                <div className="container dashboard">
                    <DashboardNavigation organism={Cookies.get('organism')} />
                    {this.props.children}
                </div>
            </DashboardLoading>
        )
    }
}

export default Dashboard
