import React from 'react';
import Search from './search';
import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';

const msp = state => {
   
  return({
    spots: state.entities.spots
  });
};

const mdp = dispatch => {
  return({
    fetchSpots: () => dispatch(fetchSpots)
  });
};

export default connect(msp, mdp)(Search);
