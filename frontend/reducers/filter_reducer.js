import { UPDATE_FILTER } from '../actions/filter_actions';
import { merge } from 'lodash';


const defaultFilters = {
  bounds: {northEast: {}, southWest: {}},
  maxGuests: 1,
};

const filterReducer = (oldState = defaultFilters, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case UPDATE_FILTER:
      const filter = {
        [action.filter]: action.value
      };
      return merge({}, oldState, filter);
    default:
      return oldState;
  }
};

export default filterReducer;
