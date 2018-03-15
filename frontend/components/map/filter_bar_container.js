import React from 'react';
import FilterBar from './filter_bar';
import { connect } from 'react-redux';
import { receiveCurrentModal } from '../../actions/ui_actions';

const msp = (state) => {
  return({
    currentModal: state.ui.modal.currentModal,
    currentUser: state.session.currentUser
  });
};

const mdp = (dispatch) => {
  return({
    receiveCurrentModal: (currentModal) =>
     dispatch(receiveCurrentModal(currentModal))
  });
};

export default connect(msp, mdp)(FilterBar);
