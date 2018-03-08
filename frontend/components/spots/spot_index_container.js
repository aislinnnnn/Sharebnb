import React from 'react';
import SpotIndex from './spot_index';
import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';

const msp = state => {
  return {
    spots: state.entities.spots,
    currentUser: state.session.currentUser
  };
};

const mdp =(dispatch) => {
  return {
    fetchSpots: () => dispatch(fetchSpots())
  };
};

export default connect(msp, mdp)(SpotIndex);
