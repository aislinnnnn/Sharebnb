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
    fetchSpots: (data) => dispatch(fetchSpots(data))
  };
};

export default connect(msp, mdp)(SpotIndex);
