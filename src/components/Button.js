import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Button extends Component {
    render() {
        var size = (this.props.size != undefined ? ' is-' + this.props.size : '');
        var shape = (this.props.shape != undefined ? ' is-' + this.props.shape : '');
        var type = (this.props.type != undefined ? ' is-' + this.props.type : '');
        return (
            <button className={"button" + size + shape + type}>{this.props.children}</button>                
        )
    }
}

export default Button
