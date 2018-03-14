import React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return(<div>{ this.props.children }</div>);
  }
}

export default withRouter(ScrollToTop);
