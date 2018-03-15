import React from "react";
import Modal from "react-modal";
import { Link, withRouter } from "react-router-dom";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";
import SearchBar from '../map/search_bar';

class Greeting extends React.Component {
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
      const searchContent = (this.props.location.pathname === '/') ?
        null :
        <SearchBar placeholder="Anywhere &middot; Homes" />;

      return (
          <div className="nav-bar">
            <div className="nav-bar-left">
              <Link to="/" >
              <img
                className="logo"
                src="https://freeiconshop.com/wp-content/uploads/edd/share-flat.png"
              />
            </Link>
            <div className="nav-search-bar">
              {searchContent}
            </div>
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

export default withRouter(Greeting);
// <Link to="/login">Log In</Link>
// <Link to="/signup">Sign Up</Link>
