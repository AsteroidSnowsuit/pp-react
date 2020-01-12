import React, { Component } from 'react'
import { HomepageNavigation } from './../components/navigation/HomepageNavigation';
import $ from 'jquery'
import Footer from '../components/Footer';

export class Homepage extends Component {
    render() {
        $('body').removeClass('dashboard');
        return (
            <div>
                <div className="container">
                    <HomepageNavigation />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Homepage
