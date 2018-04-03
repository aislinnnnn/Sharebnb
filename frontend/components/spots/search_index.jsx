import React from 'react';
import SpotIndexItem from './spot_index_item';

export default class SpotIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchSpots({bounds:{northEast: {}, southWest: {}}});
  }

  renderSpots() {
    const spots = Object.values(this.props.spots);

    return spots.map((spot, idx)=> {
      return <div key={`${idx}`}><SpotIndexItem spot={spot} key={`${idx}`} /></div>;
    });
  }


  render(){
      return(
        <div className="spot-index">
          <h1 className="spots-index">Explore Sharebnb</h1>
          <h1 className="homes-header">Homes around the world</h1>
          {this.renderSpots()}
      </div>
    );
  }
}
