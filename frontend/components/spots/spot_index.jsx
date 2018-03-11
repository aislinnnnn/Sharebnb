import React from 'react';
import SpotIndexItem from './spot_index_item';
import { Link } from 'react-router-dom';

export default class SpotIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){

    this.props.fetchSpots({bounds: {northEast: {lat:45, lng:-70}, southWest: {lat:35,lng:-75}}});
  }

  renderSpots() {
    const spots = Object.values(this.props.spots);

    return spots.map((spot)=> {
      return <SpotIndexItem spot={spot} />;
    });
  }


  render(){
      return(
        <div className="spot-index">
          <h1 className="spots-index">Explore Airbnb</h1>
          <Link to="/search">
            <div className="search-button">Homes</div>
          </Link>
          <h1 className="homes-header">Homes around the world</h1>
          {this.renderSpots()}
      </div>
    );
  }
}
