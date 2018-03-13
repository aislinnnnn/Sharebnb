export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(spots) {
    const spotKeys = Object.keys(spots);
    const markerKeys = Object.keys(this.markers);
    spotKeys.forEach((id) => {
      if (!this.markers[id]) {
        const spot = spots[id];
        this.createMarkerFromSpot(spot);
      }
    });

    markerKeys.forEach((id) => {
      if (!spots[id]){
        this.removeMarker(this.markers[id]);
      }
    });
  }

  createMarkerFromSpot(spot) {
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      id: spot.id
    });
    marker.addListener('click', () => this.handleClick(spot));
    this.markers[marker.id] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.id].setMap(null);
    delete this.markers[marker.id];
  }

}
