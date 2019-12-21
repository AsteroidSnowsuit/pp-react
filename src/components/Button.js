import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Button extends Component {

    render() {
        var size = (this.props.size != undefined ? ' is-' + this.props.size : '');
        var shape = (this.props.shape != undefined ? ' is-' + this.props.shape : '');
        var type = (this.props.type != undefined ? ' is-' + this.props.type : '');
        var loading = (this.props.loading == true ? ' is-loading' : '');
        var buttonType = (this.props.noSubmit == true ? 'button' : 'submit');
        return (
            <button type={buttonType} onClick={this.props.onClick} className={"button" + size + shape + type + loading}>{this.props.children}</button>                
        )
    }
}

export default Button
