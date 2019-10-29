import React, { Component } from 'react'

export class InterestBox extends Component {

    constructor(props) {
        super(props);
        this.state = {activated: false};
        this.interest_box_content = React.createRef();
        this.interest_icon = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            activated: !prevState.activated
        }))        
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        this.refs.interest_icon = (window.getComputedStyle(this.refs.interest_box_content).width/10*4)
    }

    render() {
        return (
            <div className="column is-one-fifth-desktop is-half-touch">
                <div className="interest-box">
                    <div className="interest-box-adjuster">
                        <div ref={"interest_box_content"} className={"interest-box-content " + (this.state.activated == true ? 'interest-box-activated' : '')} onClick={this.handleClick}>
                            <i ref={"interest_icon"} className={"interest-icon fas " + this.props.icon}></i>
                            <i className="activated-icon fas fa-check"></i>
                            <span className="interest-text is-size-3 is-size-4-mobile">Sports</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InterestBox
