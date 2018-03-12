import React from "react";
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return(
      <div className="nav-bar">
        <div className="nav-bar-left">
          <Link to="/">
            <img
              className="logo"
              src="https://d3ui957tjb5bqd.cloudfront.net/uploads/2015/09/airbnb-2.jpg"
            />
          </Link>
        </div>
        <div className="nav-bar-right">
        <Link className="nav-button" to="/bookings">
            Trips
        </Link>
          <button
            className="modal-button"
            type="submit"
            onClick={this.handleSubmit}
          >
            Logout
          </button>
          <img
            className="profile-image"
            src="https://www.cabe-africa.org/wp-content/uploads/2012/01/1.png"
          />
        </div>
      </div>
    );
  }
}
