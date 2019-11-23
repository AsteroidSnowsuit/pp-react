import React, { Component } from 'react'

export class ErrorLine extends Component {
    render() {
        return (
            <div class="error-line">
                <img src={ require('../img/danger.svg')} />
                <span>{this.props.children}</span>
            </div>
        )
    }
}

export default ErrorLine
