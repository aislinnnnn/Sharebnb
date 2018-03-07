import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    text: "Don't have an account?",
    errors: state.errors.session,
    greeting:"Log in to continue",
    formType: 'Log In',
    link: <Link to="/signup">Sign up</Link>
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
