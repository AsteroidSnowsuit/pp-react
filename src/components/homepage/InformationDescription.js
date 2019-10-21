import React, { Component } from 'react'

export class InformationDescription extends Component {
    render() {
        return (
            <div>
                <h1 className="title">{this.props.title}</h1>
                <h2 className="subtitle">{this.props.subtitle}</h2>  
            </div>
        )
    }
}

export default InformationDescription
