import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class FeatureIcon extends Component {
    render() {
        return (
            <div className="feature-icon-box">
                <div className="feature-icon-box-adjuster">
                    <div className="feature-icon-box-content">
                        <img src={this.props.icon} />
                        <Link to={this.props.destination}><h2 className="subtitle">{this.props.title}</h2></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeatureIcon
