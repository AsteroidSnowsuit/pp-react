import React, { Component } from 'react'
import { Navigation } from './../components/navigation/Navigation';


export class Homepage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                This is the homepage
            </div>
        )
    }
}

export default Homepage
