import React from 'react';
import AppContainer from './app_container';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from '../util/ScrollToTop';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <ScrollToTop>
        <AppContainer />
      </ScrollToTop>
    </HashRouter>
  </Provider>
);

export default Root;
