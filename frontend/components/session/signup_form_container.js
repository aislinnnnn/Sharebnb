import SessionForm from "./session_form";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import { receiveCurrentModal } from "../../actions/ui_actions";
import { login, clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    text: "Already have an account?",
    errors: state.errors.session,
    greeting: "",
    formType: "Log In"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: user => dispatch(signup(user)),
    receiveCurrentModal: currentModal =>
      dispatch(receiveCurrentModal(currentModal)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
