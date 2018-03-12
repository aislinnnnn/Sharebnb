import { Link, withRouter } from 'react-router';
import React from 'react';

class BookingIndexItem extends React.Component {
  constructor(props){
    super(props);
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
        </ul>
      );
  }
}

export default withRouter(BookingIndexItem);
