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

  componentWillUnmount(){
    this.props.clearErrors();
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    const {check_in, check_out, num_guests} = this.state;
    return(
      <div className="booking-form">
        <div className="price-div">
          <h1 className="book-price">${this.props.spot.price}</h1><p className="small-booking">per night</p>
        </div>
        <div
          className="form-container">
          <form

            onSubmit={this.handleSubmit}
            >
            <div className="book-input-container">
              <div>
                <label className="small-booking">Dates</label>
                <div className="date-input">
                  <div className="checkin">
                    <input
                      type="date"
                      value={check_in}
                      onChange={this.update('check_in')}
                      />
                  </div>
                  <div className="checkout">
                    <input
                      type="date"
                      value={check_out}
                      onChange={this.update('check_out')}
                      />
                  </div>
                </div>
              </div>
              <div className="guest-input-container">
                <label className="small-booking-guest">Guests</label>
                <div >
                  <div classname="guest-input-form">
                    <input
                      className="guest-input"
                      type="number"
                      value={num_guests}
                      onChange={this.update('num_guests')}
                      />
                  </div>
                </div>
              </div>
            </div>
            {this.renderErrors()}
            <input
              className="submit-booking"
              type="submit"
              value="Request to Book"
              />
            <p className="booking-warning">You won't be charged yet</p>
          </form>
          </div>
      </div>
    );
  }
}

export default withRouter(BookingForm);
