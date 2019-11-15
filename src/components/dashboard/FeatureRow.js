import React, { Component } from 'react'
import FeatureIcon from './FeatureIcon';
import FeatureInformation from './FeatureInformation';

export class FeatureRow extends Component {

    render() {
        console.log(this.props.children);
        var side = this.props.iconSide;
        var title = this.props.title;
        var subtitle = this.props.subtitle;
        var icon = this.props.icon;
        var description = this.props.children;
        var destination = this.props.destination;
        var featureIcon = <FeatureIcon title={title} image={icon} />
        var description = <FeatureInformation title={title} subtitle={subtitle} description={description} destination={destination} />

        if(side == "left") {
            return (
                <div className="columns feature-row">
                    <div className="column is-10-mobile is-offset-1-mobile is-3 is-offset-1">
                        {featureIcon}                
                    </div>
                    <div className="column is-10-mobile is-offset-1-mobile is-7">
                        {description} 
                    </div>
                </div>
            )
        }
        return (
            <div className="columns feature-row reverse-column-order">
                <div className="column is-10-mobile is-offset-1-mobile is-7 is-offset-1">
                    {description}                      
                </div>
                <div className="column is-10-mobile is-offset-1-mobile is-3">
                    {featureIcon}
                </div>
            </div>
        )
    }
}

export default FeatureRow
