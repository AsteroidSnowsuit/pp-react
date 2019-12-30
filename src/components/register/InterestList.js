import React, { Component } from 'react'
import InterestBox from './InterestBox'
import Axios from 'axios'

export class InterestList extends Component {

    constructor(props) {
        super(props);
        this.state = {pinterests: []}
        this.pinterestRefs = React.createRef()
        this.pinterestRefs.current = [];
    }

    componentDidMount() {
        Axios.get('http://localhost:8000/api/interests')
        .then((success) => {
            this.setState({pinterests: success.data.data.interests});
        })
    }

    componentDidUpdate(prevProps) {
        console.log(JSON.stringify(prevProps));
        console.log(JSON.stringify(this.props))
        if(this.props.alreadyChecked != prevProps.alreadyChecked) {
            this.props.alreadyChecked.forEach((item) => {
                this.pinterestRefs.current.forEach((pinterest) => {
                    if(item == pinterest.props.id) {
                        console.log(pinterest)
                        pinterest.handleClick();
                    }
                })
                console.log(item)
            })
        }
        console.log(this.pin)
    }

    render() {
        return (
            <React.Fragment>
                {Object.keys(this.state.pinterests).map((interest, i) => {
                    var pinterest = this.state.pinterests[interest];
                    var callbackRef = node => this.pinterestRefs.current[i] = node;
                    return <InterestBox id={pinterest.id} onClick={this.props.onClick} icon={pinterest.picture_src} title={pinterest.name} ref={callbackRef} />
                })}
            </React.Fragment>
        )
    }
}

export default InterestList
