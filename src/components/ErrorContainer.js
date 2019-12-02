import React, { Component } from 'react'
import ErrorLine from './ErrorLine'

export class ErrorContainer extends Component {
    render() {
        return (
            this.props.errors != undefined ? Object.keys(this.props.errors).map((key, index) => (<ErrorLine>{this.props.errors[key]}</ErrorLine>)) : ""
        )
    }
}

export default ErrorContainer
