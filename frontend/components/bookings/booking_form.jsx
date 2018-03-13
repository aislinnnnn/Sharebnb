import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

class BookingForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      check_in: "",
      check_out: "",
      num_guests: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      const booking = merge({},
        this.state,
        {spot_id:this.props.spot.id, user_id:this.props.currentUser.id}
      );

      this.props.createBooking(booking)
        .then((newBooking) => {
          this.props.history.push(`/bookings`);
        });
    } else {
      this.props.receiveCurrentModal("Log In");
    }


  }

  update(field) {
    return (e) =>this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    const {check_in, check_out, num_guests} = this.state;
    return(
      <div className="booking-form">
        <div className="price">
          <h1 className="book-price">${this.props.spot.price}</h1><p className="small-booking">per night</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>Check-In</label>
          <input
            type="date"
            value={check_in}
            onChange={this.update('check_in')}
            />

          <label>Check-Out</label>
          <input
            type="date"
            value={check_out}
            onChange={this.update('check_out')}
            />

          <label>Guests</label>
          <input
            type="number"
            value={num_guests}
            onChange={this.update('num_guests')}
            />
          <input
            type="submit"
            value="Request to Book"
            />

        </form>
      </div>
    );
  }
}

export default withRouter(BookingForm);
