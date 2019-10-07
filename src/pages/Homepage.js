import React, { Component } from 'react'
import { HomepageNavigation } from './../components/navigation/HomepageNavigation';


export class Homepage extends Component {
    render() {
        return (
            <div>
                <HomepageNavigation />
                This is the homepage
            </div>
        )
    }
}

export default Homepage
