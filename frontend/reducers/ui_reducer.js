import modalReducer from "./modal_reducer";
import filterReducer from './filter_reducer';
import { combineReducers } from "redux";


const uiReducer = combineReducers({
  modal: modalReducer,
  filter: filterReducer
});

export default uiReducer;
