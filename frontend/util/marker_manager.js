export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(spots) {
     ;
    const spotKeys = Object.keys(spots);
    const markerKeys = Object.keys(this.markers);

    spotKeys.forEach((id) => {
       
      if (!markerKeys.includes(id)) {
        const spot = spots[id];
        this.createMarkerFromSpot(spot);
      }
    });
  }

  createMarkerFromSpot(spot) {
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    this.markers[spot.id] = new google.maps.Marker({
      position: position,
      map: this.map,
      id: spot.id
    });
  }

}
