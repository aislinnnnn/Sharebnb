import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.changeModal = this.changeModal.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  changeModal() {
    this.props.receiveCurrentModal(this.props.link);
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
    // debugger;
    return (
      <div className="session-form">
        <div className="form-input">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h1 className="greeting">{this.props.greeting}</h1>
            {this.renderErrors()}
            <label>
              <input
                type="text"
                placeholder="Email Address"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <button>{this.props.formType}</button>
          </form>
          <div className="foot">
            <span>{this.props.text}</span>
            <div onClick={this.changeModal}>{this.props.link}</div>
          </div>
        </div>
      </div>
    );
  }
}
// { this.props.formtype === signup ? this.signupInputs() : null }

export default withRouter(SessionForm);
