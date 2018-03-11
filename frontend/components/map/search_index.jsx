import React from 'react';
import SpotIndexItem from '../spots/spot_index_item';

export default class SearchIndex extends React.Component {

  renderSpots() {
     
    const spots = Object.values(this.props.spots);

    return spots.map((spot)=> {
      return <SpotIndexItem spot={spot} />;
    });
  }


  render(){
      return(
        <div className="search-index">
          <h1 className="spots-index">Explore Airbnb</h1>
          <h1 className="homes-header">Homes around the world</h1>
          {this.renderSpots()}
      </div>
    );
  }
}
