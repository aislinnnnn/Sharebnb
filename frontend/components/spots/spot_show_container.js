import React from 'react';
import SpotShow from './spot_show';
import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spot_actions';

const msp = (state, ownProps) => {
  return {
    spot: state.entities.spots[ownProps.match.params.id]
  };
};

const mdp = (dispatch) => {
  return {
    fetchSpot: (id) => dispatch(fetchSpot(id))
  };
};

export default connect(msp, mdp)(SpotShow);
