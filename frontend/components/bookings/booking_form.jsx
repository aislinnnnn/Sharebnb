import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';
import StarRatingComponent from 'react-star-rating-component';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

class BookingForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      num_guests: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {

    e.preventDefault();
    const start = this.state.startDate ? this.state.startDate._d : null;
    const end = this.state.endDate ? this.state.endDate._d : null;

    if (this.props.currentUser) {

      const booking = merge({},
        {spot_id:this.props.spot.id,
          user_id:this.props.currentUser.id,
          check_in:start,
          check_out:end,
          num_guests:this.state.num_guests
        }
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
          <div>
            <div className="flex">
              <h1 className="book-price">${this.props.spot.price}</h1><p className="small-booking">per night</p>
            </div>
            <div style={{fontSize:12}} className="average-rating-show">
              <StarRatingComponent
                style={{padding:'20px'}}
                name="star"
                editing={false}
                starCount={5}
                value={this.props.spot.average_rating}
                starColor={'#008489'}
                emptyStarColor={'#dce0e0'}
                starSpacing="5px"
                />
            </div>
          </div>
        </div>
        <div
          className="form-container">
          <form

            onSubmit={this.handleSubmit}
            >
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="start_date"
              endDate={this.state.endDate}
              endDateId="end_date"
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              startDatePlaceholderText="Check In"
              endDatePlaceholderText="Check Out"
              hideKeyboardShortcutsPanel={true}
              showClearDates={true}
              />
              <div className="guest-input-container">
                <label className="small-booking-guest">Guests</label>
                <div >
                  <div className="guest-input-form">
                    <input
                      className="guest-input"
                      type="number"
                      value={num_guests}
                      onChange={this.update('num_guests')}
                      />
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
