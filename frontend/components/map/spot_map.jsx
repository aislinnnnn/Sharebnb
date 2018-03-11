import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class SpotMap extends React.Component {

  componentDidMount() {
     
    const mapOptions = {
      center: { lat: 40.75, lng:-73.98 },
      zoom:12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
     
    this.setListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  setListeners() {
     
    google.maps.event.addListener(this.map, 'idle', () => {
    const { north, south, east, west } = this.map.getBounds().toJSON();
    const bounds = {
      northEast: { lat:north, lng:east },
      southWest: { lat: south, lng:west } };
       
    this.props.updateFilters('bounds', bounds);
    });
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }


  render() {
    return (
      <div className="map" ref={ map => this.mapNode = map}>Map</div>
    );
  }
}

export default SpotMap;
