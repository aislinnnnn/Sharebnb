import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';
import SearchBar from './search_bar';

class SpotMap extends React.Component {

  componentDidMount() {
    let mapOptions;
    if (this.props.showPage){
      const lat = this.props.spot.lat;
      const lng = this.props.spot.lng;
      mapOptions = {
        center: { lat: lat, lng:lng },
        zoom:12
      };
    } else {
      mapOptions = {
        center: { lat: 20, lng:-30 },
        zoom:2
      };
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);


    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

    if (this.props.showPage) {
      this.props.fetchSpot(this.props.spotId);
      this.MarkerManager.updateMarkers([this.props.spot]);
    } else {
      this.setListeners();
      this.MarkerManager.updateMarkers(this.props.spots);
    }

  }

  handleMarkerClick(spot) {

    this.props.history.push(`spots/${spot.id}`);
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

    if (this.props.showPage){
      this.MarkerManager.updateMarkers([this.props.spot]);
    } else {
      this.MarkerManager.updateMarkers(this.props.spots);
    }
  }


  render() {
    return (
      <div>
        <SearchBar map={this.map}/>
        <div className="map" ref={ map => this.mapNode = map}>Map</div>
      </div>
    );
  }
}

export default withRouter(SpotMap);
