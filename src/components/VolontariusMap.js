import React, { Component } from 'react'
import L from 'leaflet'
import Button from './Button';

export class VolontariusMap extends Component {

  constructor(props) {
    super(props);
    this.invalidateSize = this.invalidateSize.bind(this);
  }

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

  invalidateSize() {
    this.map.invalidateSize();
    this.map.panTo(new L.latLng(this.props.lat, this.props.lon))
  }

  componentWillReceiveProps(nextProps) {
    var lon = nextProps.lon;
    var lat = nextProps.lat;
    if(lon != this.props.lon && lat != this.props.lat) {
      this.map.panTo(new L.latLng(lat, lon));
      L.marker([lat, lon]).addTo(this.map);     
    }
  }
    render() {      
        return (
          <React.Fragment>
            <br />
          <Button noSubmit={true} onClick={this.invalidateSize}>Recentrer la carte</Button>
          <div id="mapid"></div>
          </React.Fragment>
        )
    }
}

export default VolontariusMap
