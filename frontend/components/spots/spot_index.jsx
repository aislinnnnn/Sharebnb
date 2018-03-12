import React from 'react';
import SpotIndexItem from './spot_index_item';
import { Link } from 'react-router-dom';

export default class SpotIndex extends React.Component {

  componentDidMount(){

    this.props.fetchSpots({bounds: {northEast: {lat:45, lng:-70}, southWest: {lat:35,lng:-75}}});
  }

  renderSpots() {
    const spots = Object.values(this.props.spots);

    return spots.map((spot)=> {
      return <div className="spot"><SpotIndexItem spot={spot} /></div>;
    });
  }


  render(){
      return(
        <div className="spot-index-wrapper">
          <h1 className="homes-header">Explore Sharebnb</h1>
          <Link to="/search">
            <div className="search-link">
              <div className="img"></div>
              <div>Homes</div>
            </div>

          </Link>
          <h1 className="homes-header">Homes around the world</h1>
          <div className="spots">
            {this.renderSpots()}
          </div>
      </div>
    );
  }
}
