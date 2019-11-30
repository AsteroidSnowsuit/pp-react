import React, { Component } from 'react'
import { HomepageNavigation } from './../components/navigation/HomepageNavigation';
import $ from 'jquery'

export class Homepage extends Component {
    render() {
        $('body').removeClass('dashboard');
        return (
            <div>
                <div className="container">
                    <HomepageNavigation />
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Homepage
