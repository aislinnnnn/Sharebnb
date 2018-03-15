import React from 'react';
import FilterForm from './filter_form';
import { connect } from 'react-redux';
import { updateFilters } from '../../actions/filter_actions';
import { receiveCurrentModal } from '../../actions/ui_actions';

const msp = state => {
  return({
    maxGuests: state.ui.filter.maxGuests
  });
};

const mdp = dispatch => {
  return({
    receiveCurrentModal: (currentModal) =>
    dispatch(receiveCurrentModal(currentModal)),
    updateFilters: (filter, value) =>  dispatch(updateFilters(filter, value))
  });
};

export default connect(msp,mdp)(FilterForm);
