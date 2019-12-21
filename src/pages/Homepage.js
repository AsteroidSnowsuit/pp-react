import React, { Component } from 'react'
import { HomepageNavigation } from './../components/navigation/HomepageNavigation';
import $ from 'jquery'
import AdminTools from '../components/admin/AdminTools';

export class Homepage extends Component {
    render() {
        $('body').removeClass('dashboard');
        return (
            <div>
                <div className="container">
                    <HomepageNavigation />
                    {this.props.children}
                </div>
                <AdminTools />
            </div>
        )
    }
}

export default Homepage
