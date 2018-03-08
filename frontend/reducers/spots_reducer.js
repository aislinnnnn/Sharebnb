import { RECEIVE_SPOT, RECEIVE_SPOTS } from '../actions/spot_actions';
import { merge } from 'lodash';

const spotsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    case  RECEIVE_SPOT:
      return merge({}, oldState, {[action.spot.id]:action.spot});
    default:
      return oldState;
  }
};
 export default spotsReducer;
