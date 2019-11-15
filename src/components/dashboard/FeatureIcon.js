import React, { Component } from 'react'

export class FeatureIcon extends Component {
    render() {
        return (
            <div className="feature-icon-box">
                <div className="feature-icon-box-adjuster">
                    <div className="feature-icon-box-content">
                        <h2 className="subtitle">{this.props.title}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeatureIcon
