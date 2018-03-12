import React from 'react';
import BookingForm from './booking_form';
import { connect } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';
import { withRouter } from 'react-router';
import { receiveCurrentModal } from '../../actions/ui_actions';

const msp = (state, ownProps) => {
  return{
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return({
    receiveCurrentModal: (currentModal) => dispatch(receiveCurrentModal(currentModal)),
    createBooking: (booking) => dispatch(createBooking(booking))
  });
};

export default withRouter(connect(msp, mdp)(BookingForm));
