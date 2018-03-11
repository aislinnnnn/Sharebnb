import { fetchSpots } from './spot_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const changeFilters = (filter, value) => ({
  type:UPDATE_FILTER,
  filter,
  value
});

 export const updateFilters = (filter, value) => (dispatch, getState) => {
   dispatch(changeFilters(filter,value));
   return fetchSpots(getState().ui.filter)(dispatch);
 };
