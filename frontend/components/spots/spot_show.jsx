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
          <div >
            <img className="show-img" src={spot.image_url} />
          </div>
          <div className="content-booking-container">
            <div className="show-content">
              <div className="show-header">
                <h1 className="show-title">{spot.title}</h1>
                <span className="show-location">{spot.location}</span>
                <ul className="stats">
                  <li><img className="icon" src="https://png.icons8.com/ios-glyphs/50/000000/conference-call.png"/>{spot.num_guests} guests</li>
                  <li><img
                    className="icon"
                     src="https://png.icons8.com/ios/50/000000/door-filled.png"/>{spot.num_bedrooms} bedrooms</li>
                   <li><img
                     className="icon" src="https://png.icons8.com/ios/50/000000/bed-filled.png"/>{spot.num_beds} beds</li>
                   <li><img
                     className="icon" src="https://png.icons8.com/ios/50/000000/bath-filled.png"/>{spot.num_baths} baths</li>
                </ul>
                <p className="show-description">{spot.description}</p>
              </div>
              <div className="info-container">
                <h2 className="show-bold">Amenities</h2>
                <p className="show-thin">List of amenities from join table</p>
              </div>
              <div className="info-container">
                <h2 className="show-bold">House Rules</h2>
                <p className="show-thin">{spot.rules}</p>
              </div>
              <div className="info-container">
                <h1 className="show-bold">Reviews</h1>
              </div>
            </div>
            <div className="booking">
              BOOKINGS
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }

  }

}
