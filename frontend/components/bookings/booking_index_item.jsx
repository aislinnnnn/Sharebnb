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

  parseDate(date) {
    const splitDate = date.split("-");
    const year = splitDate[0];
    const monthNum = parseInt(splitDate[1]);
    const day = splitDate[2];

    let month;
    switch (monthNum) {
      case 1:
        month = 'January';
        break;
      case 2:
        month = 'February';
        break;
      case 3:
        month = 'March';
        break;
      case 4:
        month = 'April';
        break;
      case 5:
        month = 'May';
        break;
      case 6:
        month = 'June';
        break;
      case 7:
        month = 'July';
        break;
      case 8:
        month = 'August';
        break;
      case 9:
        month = 'September';
        break;
      case 10:
        month = 'October';
        break;
      case 11:
        month = 'November';
        break;
      case 12:
        month = 'December';
        break;
    }

    return month.concat(' ').concat(day).concat(', ').concat(year);

  }

  render () {
      return(
          <div className="booking-item">
            <div className="booking-details">
              <div>
                <h1 className="location-header">{this.props.booking.spot.location}</h1>
                <div className="flex">
                  <h3 className="title-header">{this.props.booking.spot.title} &middot;</h3>
                  <h3 className="title-header">{this.props.booking.num_guests} guests</h3>
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
                src={this.props.booking.spot.image_url} />

            </div>
          </div>
      );
  }
}

export default withRouter(BookingIndexItem);
