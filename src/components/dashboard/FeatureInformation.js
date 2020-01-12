import React, { Component } from 'react'

export class FeatureInformation extends Component {
    render() {
        var title = (this.props.subtitle == undefined ? this.props.title : this.props.subtitle);
        return (
            <div className="feature-info-box">
                <h2 className="subtitle">{title}</h2>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default FeatureInformation
