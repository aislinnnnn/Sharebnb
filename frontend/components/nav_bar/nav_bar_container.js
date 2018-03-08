import NavBar from "./nav_bar";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";



const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(NavBar);
