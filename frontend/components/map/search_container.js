import React from 'react';
import Search from './search';
import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import { updateFilters } from '../../actions/filter_actions';

const msp = state => {

  return({
    // center: "",
    spots: state.entities.spots,
    maxGuests: state.ui.filter.maxGuests
  });
};

const mdp = dispatch => {
  return({
    updateFilters: (filter, value) => dispatch(updateFilters(filter, value))
  });
};

export default connect(msp, mdp)(Search);
