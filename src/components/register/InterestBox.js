import React, { Component } from 'react'

export class InterestBox extends Component {

    constructor(props) {
        super(props);
        this.state = {activated: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            activated: !prevState.activated
        }))        
    }
    render() {
        return (
            <div className="column is-one-fifth-desktop is-half-touch">
                <div className="interest-box">
                    <div className="interest-box-adjuster " >
                        <div className={"interest-box-content " + this.state.activated == true ? 'interest-box-activated' : ''} onClick={this.handleClick}>
                            <i className={"interest-icon fas " + this.props.icon}></i>
                            <i className="activated-icon fas fa-check"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InterestBox
