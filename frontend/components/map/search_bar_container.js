import React from 'react';
import SearchBar from './search_bar';
import { connect } from 'react-redux';
import { updateFilters } from '../../actions/filter_actions';

const mdp = dispatch => {
  
  return({
    updateFilters: (filter, value) =>  dispatch(updateFilters(filter, value))
  });
};

export default connect(null,mdp)(SearchBar);
