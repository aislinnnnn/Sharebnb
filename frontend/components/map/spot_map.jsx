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
    this.MarkerManager.updateMarkers(this.props.spots);
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
