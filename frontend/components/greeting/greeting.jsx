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
        <div>
          <h1>{this.props.currentUser.username}</h1>
          <button type='submit' onClick={this.handleSubmit}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">SignUp</Link>
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }
}
