import React from 'react';
import SpotIndexItem from './spot_index_item';

export default class SpotShow extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    
    this.props.fetchSpot(this.props.match.params.id);
  }

  render () {
    const spot = this.props.spot;
    if (spot) {
      return(
        <div className="spot-show">
          <img src={spot.image_url} />
          <h1>{spot.title}</h1>
          <span>{spot.location}</span>
          <ul>
            <li>{spot.num_guests} guests</li>
            <li>{spot.num_bedrooms} bedrooms</li>
            <li>{spot.num_beds} beds</li>
            <li>{spot.num_baths} baths</li>
          </ul>
          <p>{this.description}</p>
          <h2>Amenities</h2>
          <h2>House Rules</h2>
            <p>{spot.ruless}</p>
          <h1>Reviews</h1>
        </div>
      );
    } else {
      return <div>NO SPOT</div>;
    }

  }

}
