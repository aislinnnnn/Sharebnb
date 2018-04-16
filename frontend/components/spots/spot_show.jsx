import React from 'react';
import SpotIndexItem from './spot_index_item';
import SpotMap from '../map/spot_map';
import BookingFormContainer from '../bookings/booking_form_container';
import { withRouter } from 'react-router';
import ReviewIndexContainer from '../reviews/review_index_container';


class SpotShow extends React.Component {

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
                <h2 className="show-bold">House Rules</h2>
                <p className="show-thin">{spot.rules}</p>
              </div>
              <div className="info-container">
                <ReviewIndexContainer spot={this.props.spot} />
              </div>
              <div className="info-container">
                <h1 className="show-bold-big">The Neighborhood</h1>
                  <p className="show-thin">This home is located in {this.props.spot.location}</p>
                  <SpotMap spot={this.props.spot}
                    spotId={this.props.spot.id}
                    showPage={true}
                    fetchSpot={this.props.fetchSpot}
                    updateFilters={this.props.updateFilters}/>
                  <p className="show-thin">The map shows this home's exact location.</p>
              </div>
            </div>
            <div className="booking">
              <BookingFormContainer spot={this.props.spot} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }

  }

}

export default withRouter(SpotShow);
