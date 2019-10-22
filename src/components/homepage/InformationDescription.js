import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import LinkButton from '../LinkButton';

export class InformationDescription extends Component {
    render() {
        return (
            <div>
                <h1 className="title">{this.props.title}</h1>
                <h2 className="subtitle">{this.props.subtitle}</h2>
                {this.props.button != undefined ? <LinkButton destination={this.props.destination} size="medium" type="primary" shape="rounded">{this.props.button}</LinkButton> : ''}
            </div>
        )
    }
}

export default InformationDescription
