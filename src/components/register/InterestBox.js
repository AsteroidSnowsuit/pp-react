import React, { Component } from 'react'

export class InterestBox extends Component {

    constructor(props) {
        super(props);
        this.state = {activated: false};
        this.interest_box_content = React.createRef();
        this.interest_text = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.id, this.props.title);
        this.setState(prevState => ({
            activated: !prevState.activated
        }))        
    }

    componentDidMount() {
       /* if((window.getComputedStyle(this.refs.interest_text).width) > (window.getComputedStyle(this.refs.interest_box_content).width)) {
            console.log((window.getComputedStyle(this.refs.interest_text).width));
            console.log((window.getComputedStyle(this.refs.interest_box_content).width));
            this.refs.interest_text.style.fontSize = '1.5vw';
        }*/
    }

    updateDimensions() {
        console.log((window.getComputedStyle(this.refs.interest_box_content).width))
        this.refs.interest_text = (window.getComputedStyle(this.refs.interest_box_content).width)
    }

    render() {
        return (
            <div className="column is-one-fifth-desktop is-half-touch">
                <div className="interest-box">
                    <div className="interest-box-adjuster">
                        <div ref={"interest_box_content"} className={"interest-box-content " + (this.state.activated == true ? 'interest-box-activated' : '')} onClick={this.handleClick}>
                            <img className="interest-icon" src={this.props.icon} style={{'height': '50%'}}></img>
                            <i className="activated-icon fas fa-check"></i>
                            <span ref={"interest_text"} className="interest-text">{this.props.title}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InterestBox
