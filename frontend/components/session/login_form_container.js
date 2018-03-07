import React from "react";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import { receiveCurrentModal } from "../../actions/ui_actions";

const mapStateToProps = state => {
  return {
    text: "Don't have an account?",
    errors: state.errors.session,
    greeting: "Log in to continue",
    formType: "Log In",
    link: "signup"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(login(user)),
    receiveCurrentModal: currentModal =>
      dispatch(receiveCurrentModal(currentModal)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
