import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Email Address",
      password: "Password"
    };
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  // signupInputs() {
  //   <input ...
  // }

  render() {
    return (
      <div className="session-form">
        <div className="form-input">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h1 className="greeting">{this.props.greeting}</h1>
            {this.renderErrors()}
            <label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </label>
            <label>
              <input
                type="text"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <button>{this.props.formType}</button>
          </form>
          <div className="foot">
            <span>{this.props.text}</span>
            {this.props.link}
          </div>
        </div>
      </div>
    );
  }
}
// { this.props.formtype === signup ? this.signupInputs() : null }

export default withRouter(SessionForm);
