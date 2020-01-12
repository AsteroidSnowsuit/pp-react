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
        if(this.props.alreadyChecked != prevProps.alreadyChecked) {
            this.props.alreadyChecked.forEach((item) => {
                this.pinterestRefs.current.forEach((pinterest) => {
                    if(item == pinterest.props.id) {
                        pinterest.handleClick();
                    }
                })
            })
        }
    }

    render() {
        if(this.props.fullInterests != null) {
            if(this.props.fullInterests.length != 0) {
                return (
                    <div className="columns interest-columns is-multiline column  is-mobile">
                        {Object.keys(this.props.fullInterests).map((interest, i) => {
                            var pinterest = this.props.fullInterests[interest];
                            return <InterestBox id={pinterest.id} onClick={this.props.onClick} icon={pinterest.picture_src} title={pinterest.name} />
                        })}
                    </div>
                )
            }
            else {
                return (<p>Aucun intérêt à afficher pour cette offre...</p>)
            }
            
        }   
        return (
            <div className="columns interest-columns is-multiline column  is-mobile">
                {Object.keys(this.state.pinterests).map((interest, i) => {
                    var pinterest = this.state.pinterests[interest];
                    var callbackRef = node => this.pinterestRefs.current[i] = node;
                    return <InterestBox id={pinterest.id} onClick={this.props.onClick} icon={pinterest.picture_src} title={pinterest.name} ref={callbackRef} />
                })}
            </div>
        )
    }
}

export default InterestList
