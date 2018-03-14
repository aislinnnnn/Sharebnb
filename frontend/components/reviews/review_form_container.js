import React from 'react';
import ReviewForm from './review_form';
import { connect } from 'react-redux';
import { createReview, clearErrors } from '../../actions/review_actions';
import { withRouter } from 'react-router';
import { receiveCurrentModal } from '../../actions/ui_actions';

const msp = (state) => {
  return{
    errors:state.errors.reviews,
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return({
    clearErrors: () => dispatch(clearErrors()),
    receiveCurrentModal: (currentModal) => dispatch(receiveCurrentModal(currentModal)),
    createReview: (review) => dispatch(createReview(review))
  });
};

 export default withRouter(connect(msp, mdp)(ReviewForm));
