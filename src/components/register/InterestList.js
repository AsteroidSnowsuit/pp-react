import React, { Component } from 'react'
import InterestBox from './InterestBox'
export class InterestList extends Component {
    render() {
        return (
            <React.Fragment>
                {Object.keys(this.props.pinterests).map((interest) => {
                    var pinterest = this.props.pinterests[interest];
                    return <InterestBox id={pinterest.id} handleClick={this.addInterest} icon={pinterest.picture_src} title={pinterest.name} />
                })}
            </React.Fragment>
        )
    }
}

export default InterestList
