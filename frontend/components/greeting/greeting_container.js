import Greeting from "./greeting";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { receiveCurrentModal } from "../../actions/ui_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    currentModal: state.ui.modal.currentModal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    receiveCurrentModal: currentModal =>
      dispatch(receiveCurrentModal(currentModal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
