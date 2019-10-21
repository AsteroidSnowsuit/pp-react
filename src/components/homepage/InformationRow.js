import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InformationDescription from './InformationDescription';
import InformationImage from './InformationImage';

export class InformationRow extends Component {



    render() {
        var side = this.props.imageSide;
        var title = this.props.title;
        var subtitle = this.props.subtitle;
        var imageSrc = this.props.image;
        var image = <InformationImage image={imageSrc} />
        var description = <InformationDescription title={title} subtitle={subtitle} />

        return (
            // image right
            <div className={"columns is-vcentered " + (side == 'right' ? 'reverse-column-order' : '')}>
                <div className="column is-5 is-offset-1">
                    {side == "right" ? description  : image }                      
                </div>
                <div className="is-5 column">
                    {side == "right" ? image  : description } 
                </div>
            </div>
        )
    }
}

export default InformationRow
