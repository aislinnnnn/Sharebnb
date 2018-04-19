import { Link, withRouter } from 'react-router';
import React from 'react';
import moment from 'moment';

class BookingIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.deleteBooking(this.props.booking.id);
  }

  parseDate(date) {
    let dated = moment(date);
    let day = dated.day();
    let year = dated.year();
    let monthNum = dated.month();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                    'October', 'November', 'December'];
    let month = months[monthNum];
    
    return month.concat(' ').concat(day).concat(', ').concat(year);
  }

  render () {

      return(
          <div className="booking-item">
            <div className="booking-details">
              <div>
                <h1 className="location-header">{this.props.booking.spot.location}</h1>
                <div className="flex">
                  <h3 className="title-header">{this.props.booking.spot.title}</h3>
                  <h3 className="title-header"> &middot;     {this.props.booking.num_guests} guests</h3>
                </div>
                <div className="dates-booking">
                  <div className="booking-date">
                    {this.parseDate(this.props.booking.check_in)}
                    <h3 className="small-caps">CHECK IN</h3>
                  </div>
                  <div>
                    <img
                      className="arrow"
                       src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-256.png" />
                  </div>
                  <div className="booking-date">
                    {this.parseDate(this.props.booking.check_out)}
                    <h3 className="small-caps">CHECK OUT</h3>
                  </div>
                </div>
              </div>
              <div
                className="booking-delete-button"
                onClick={this.handleSubmit}>
                  <img
                    className="booking-delete-image"
                    src="https://cdn3.iconfinder.com/data/icons/iconic-1/32/calendar_alt_stroke-128.png" />
                  <div className="delete-text">
                    Delete this booking
                  </div>
              </div>
            </div>
            <div>
              <img
                className="booking-image"
                src={this.props.booking.image_url} />

            </div>
          </div>
      );
  }
}

export default withRouter(BookingIndexItem);
