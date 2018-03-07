import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }




  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => this.setState({[field]:e.currentTarget.value});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h1>{this.props.greeting}</h1>
          {this.props.link}
          {this.renderErrors()}
          <label>Email:
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              />
          </label>
          <label>Password:
            <input type="text"
              value={this.state.password}
              onChange={this.update('password')}
              />
          </label>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
