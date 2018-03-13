import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';
import queryString from 'query-string';

class SpotMap extends React.Component {

  componentDidMount() {
    let mapOptions;
    if (this.props.showPage){
      const lat = this.props.spot.lat;
      const lng = this.props.spot.lng;
      mapOptions = {
        center: { lat: lat, lng:lng },
        zoom:14
      };
    } else if (this.props.location.search) {
      const center = queryString.parse(this.props.location.search);
      const lat = parseFloat(center.lat);
      const lng = parseFloat(center.lng);
      const parsedCenter = {lat: lat, lng:lng};
      mapOptions = {
        center: parsedCenter,
        zoom:12
      }
    } else {
      mapOptions = {
        center: { lat: 20, lng:-30 },
        zoom:2
      };
    }

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    if (this.props.location.search) {

    }

    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));

    if (this.props.showPage) {
      this.props.fetchSpot(this.props.spotId);
      this.MarkerManager.updateMarkers([this.props.spot]);
    } else {
      this.setListeners();
      this.MarkerManager.updateMarkers(this.props.spots);
    }

  }

  componentWillReceiveProps(newProps) {
    if (!this.props.showPage){
      if (newProps.location.search !== this.props.location.search) {
        const old = this.map.getCenter();
        const oldCenter = {center: {lat:`${old.lat()}`, lng:`${old.lng()}` }}
        const center = queryString.parse(newProps.location.search);
        const newCenter = {center: center}
        const lat = parseFloat(center.lat);
        const lng = parseFloat(center.lng);
        const parsedCenter = {lat: lat, lng:lng};



        if ((Object.keys(center).length!== 0) && (newCenter.center.lat !== oldCenter.center.lat)){

          this.map.setCenter(parsedCenter);
          this.map.setZoom(12);
        }
        // }
        this.MarkerManager.updateMarkers(this.props.spots);
      }
    }
  }

  handleMarkerClick(spot) {

    this.props.history.push(`/spots/${spot.id}`);
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
        <div className="map" ref={ map => this.mapNode = map}>Map</div>
      </div>
    );
  }
}

export default withRouter(SpotMap);
