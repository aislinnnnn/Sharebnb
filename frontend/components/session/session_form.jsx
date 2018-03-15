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
    this.props.receiveCurrentModal(this.props.goTo);
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

  handleGuestLogin(e) {
    e.preventDefault();
    const guestUser = { username: "guestuser", password: "password" };
    this.props.login(guestUser);
  }

  render() {
    return (
      <div className="session-form">
        <div className="form-input">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h1 className="greeting">{this.props.greeting}</h1>
            <div className="input-container">
              <label>
                <input
                  type="text"
                  placeholder="Email Address"
                  value={this.state.username}
                  onChange={this.update("username")}
                />
              </label>
              <img
                className="input-image"
                src="https://png.icons8.com/ios/50/000000/filled-message.png"
              />
            </div>
            <div className="input-container">
              <label>
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
              <img
                className="input-image"
                src="https://cdn4.iconfinder.com/data/icons/mayssam/512/lock-512.png"
              />
            </div>
            {this.renderErrors()}
            <button>{this.props.formType}</button>
            <button className="modal-button" onClick={this.handleGuestLogin}>
              Guest Log In
            </button>
          </form>
          <div className="foot">
            <span>{this.props.text}</span>
            <div onClick={this.changeModal}>
              <div className="modal-link">{this.props.goTo}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
