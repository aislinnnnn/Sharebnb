import { RECEIVE_CURRENT_MODAL } from "../actions/ui_actions";
import { merge } from "lodash";

const _nullModal = { currentModal: null };

const modalReducer = (oldState = _nullModal, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_MODAL:
      return merge({}, { currentModal: action.currentModal });
    default:
      return oldState;
  }
};

export default modalReducer;
