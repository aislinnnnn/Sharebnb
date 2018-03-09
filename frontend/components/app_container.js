import React from 'react';
import App from './app.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const msp = state => {

  return{
    currentUser: state.session.currentUser
  };
};

export default withRouter(connect(msp)(App));
