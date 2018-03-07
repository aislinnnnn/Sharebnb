import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="nav-bar">
          <h1>{this.props.currentUser.username}</h1>
          <button type='submit' onClick={this.handleSubmit}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="nav-bar">
          <div className="nav-bar-left">
            <img className="logo" src="https://d3ui957tjb5bqd.cloudfront.net/uploads/2015/09/airbnb-2.jpg" />
          </div>
          <div className="nav-bar-right">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </div>
        </div>
      );
    }
  }
}
