import React, { Component } from 'react'
import L from 'leaflet'

export class VolontariusMap extends Component {
  componentDidMount() {
    this.map = L.map('mapid', {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    })
  }

  componentWillReceiveProps(nextProps) {
    var lon = nextProps.lon;
    var lat = nextProps.lat;
    if(lon != this.props.lon && lat != this.props.lat) {
      this.map.panTo(new L.latLng(lat, lon));
      L.marker([lat, lon]).addTo(this.map);     
      this.map.invalidateSize(); 
    }
  }
    render() {      
        return (
          ""
        )
    }
}

export default VolontariusMap
