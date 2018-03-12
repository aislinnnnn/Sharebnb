import { Link, withRouter } from 'react-router';
import React from 'react';

class BookingIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.deleteBooking(this.props.booking.id);
  }

  render () {

      return(
        <ul>
          <li>{this.props.booking.spot.id}</li>
          <li>{this.props.booking.spot.title}</li>
          <li>{this.props.booking.id}</li>
          <li>{this.props.booking.spot_id}</li>
          <li>{this.props.booking.user_id}</li>
          <li>{this.props.booking.check_in}</li>
          <li>{this.props.booking.check_out}</li>
          <li>{this.props.booking.num_guests}</li>
          <button
              className="delete-button"
              type="submit"
              onClick={this.handleSubmit}
            >
              Delete this booking!
          </button>
        </ul>
      );
  }
}

export default withRouter(BookingIndexItem);
