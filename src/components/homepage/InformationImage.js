import React, { Component } from 'react'

export class InformationImage extends Component {
    render() {
        return (
            <img src={this.props.image}></img>
        )
    }
}

export default InformationImage
