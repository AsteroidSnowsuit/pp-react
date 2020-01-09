import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class ResultBox extends Component {
    render() {
        var offer = this.props.offer;
        if(this.props.organism == true) {
            var link = "/organisme/offres/" + offer.id;
        } else {
            var link = "/offres/" + offer.id;
        }
        var info = "| " + offer.address + " | " + offer.date;
        if(offer.minimumAge > 0) {
            info = info + " | Âge minimum : " + offer.minimumAge + " ans" 
        }
        var pictureLink = offer.organization.picture != null ? "http://localhost:8000" + offer.organization.picture : require('../../img/user/hands.svg');
        var archived = offer.archived == 1 ? ' archived' : '';
        return (
            <div key={offer.id} className={"result-box" + archived}>
                <div className="result-box-img"><img src={pictureLink} /></div>
                <div className="result-box-info">
                    <span className="result-box-org">{offer.organization.name}</span>
                    <span className="result-box-title"><Link to={link}>{offer.name}</Link></span>
                    <p className="result-box-desc">{offer.description.substring(0,50)}</p>
                    {(offer.placesAvailable > 0) ? 
                    <span className="result-box-nPlaces">{offer.placesAvailable} places disponibles {info}</span>
                    :
                    <span className="result-box-nPlaces">{offer.placesAvailable * -1} personnes dans la file d'attente  {info}</span>
                    }
                </div>
                <div className="result-box-date"></div>
            </div>
        )
    }
}

export default ResultBox
