import React, { Component } from 'react'
import Button from './Button';
import {Link} from 'react-router-dom'

export class LinkButton extends Component {
    render() {
        var {destionation, ...rest} = this.props;
        return (
            <Link className="link-button" to={this.props.destination}>
                <Button {...rest}>{this.props.children}</Button>
            </Link>
        )
    }
}

export default LinkButton
