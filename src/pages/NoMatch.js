import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NoMatch extends Component {
    render() {
        return (
            <div>
                The page you are looking for doesn't exist. <br />
                <Link to="/">Click here to get to the homepage.</Link>
            </div>
        )
    }
}

export default NoMatch
