import React, { Component } from 'react'
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
 
export class VolontariusMap extends Component {
    render() {
        new Map({
            target: 'offer-map',
            layers: [
              new TileLayer({
                source: new OSM()
              })
            ],
            view: new View({
              center: [0, 0],
              zoom: 1
            })
          })
        return (
            <div id="offer-map"></div>
        )
    }
}

export default VolontariusMap
