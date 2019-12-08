import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class ResultBox extends Component {
    render() {
        var offer = this.props.offer;
        var info = "| " + offer.address + " | " + offer.date;
        return (
            <div key={offer.id} className="result-box">
                <div className="result-box-img"><img src={require('../../img/user/hands.svg')} /></div>
                <div>
                    <span className="result-box-org">{offer.organization.name}</span>
                    <span className="result-box-title"><Link to={"/offres/" + offer.id}>{offer.name}</Link></span>
                    <p className="result-box-desc">{offer.description}</p>
                    {(offer.nPlaces > 0) ? 
                    <span className="result-box-nPlaces">{offer.nPlaces} places disponibles {info}</span>
                    :
                    <span className="result-box-nPlaces">{offer.nPlaces * -1} personnes dans la file d'attente  {info}</span>
                    }
                </div>
                <div className="result-box-date"></div>
            </div>
        )
    }
}

export default ResultBox
