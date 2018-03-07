import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModal: this.props.currentModal
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.handleOpenLoginModal = this.handleOpenLoginModal.bind(this);
    this.handleCloseLoginModal = this.handleCloseLoginModal.bind(this);
    this.handleOpenSignupModal = this.handleOpenSignupModal.bind(this);
    this.handleCloseSignupModal = this.handleCloseSignupModal.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleGuestLogin(e) {
    e.preventDefault();
    const guestUser = { username: "guestuser", password: "password" };
    this.props.login(guestUser);
  }

  handleOpenLoginModal() {
    this.props.receiveCurrentModal("Log In");
  }

  handleOpenSignupModal() {
    this.props.receiveCurrentModal("Sign Up");
  }

  handleCloseLoginModal() {
    this.props.receiveCurrentModal(null);
  }

  handleCloseSignupModal() {
    this.props.receiveCurrentModal(null);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="nav-bar">
          <div className="nav-bar-left">
            <img
              className="logo"
              src="https://d3ui957tjb5bqd.cloudfront.net/uploads/2015/09/airbnb-2.jpg"
            />
          </div>
          <div className="nav-bar-right">
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
    } else {
      return (
        <div className="nav-bar">
          <div className="nav-bar-left">
            <img
              className="logo"
              src="https://d3ui957tjb5bqd.cloudfront.net/uploads/2015/09/airbnb-2.jpg"
            />
          </div>
          <div className="nav-bar-right">
            <button className="modal-button" onClick={this.handleGuestLogin}>
              Guest Log In
            </button>
            <button
              className="modal-button"
              onClick={this.handleOpenSignupModal}
            >
              Sign Up
            </button>
            <Modal
              className="modal"
              overlayClassName="overlay"
              isOpen={this.props.currentModal === "Sign Up"}
              contentLabel="Sign Up Modal"
            >
              <div
                className="close-button"
                onClick={this.handleCloseSignupModal}
              >
                X
              </div>
              <SignupFormContainer />
            </Modal>

            <button
              className="modal-button"
              onClick={this.handleOpenLoginModal}
            >
              Log In
            </button>
            <Modal
              className="modal"
              overlayClassName="overlay"
              isOpen={this.props.currentModal === "Log In"}
              contentLabel="Log In Modal"
            >
              <div
                className="close-button"
                onClick={this.handleCloseLoginModal}
              >
                X
              </div>
              <LoginFormContainer />
            </Modal>
          </div>
        </div>
      );
    }
  }
}

// <Link to="/login">Log In</Link>
// <Link to="/signup">Sign Up</Link>
