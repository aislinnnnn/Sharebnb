import React from 'react';
import BookingIndexItem from './booking_index_item';
import { withRouter } from 'react-router';

class BookingIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBookings();
  }

  renderBookings() {
    const bookings = Object.values(this.props.bookings);
    return bookings.map((booking)=> {
      return <div><BookingIndexItem booking={booking} deleteBooking={this.props.deleteBooking} /></div>;
    });
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div className="booking-index">
          {this.renderBookings()}
        </div>
      );
    } else {
      this.props.receiveCurrentModal("Log In");
      return <div>You must be logged in to view your bookings!</div>;
    }
  }
}
 export default withRouter(BookingIndex);
