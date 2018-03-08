import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from "react-router-dom";
import SpotIndexContainer from './spots/spot_index_container';
import SpotShowContainer from './spots/spot_show_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { ProtectedRoute, AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>

        <AuthRoute path="/" component={GreetingContainer} />
        <ProtectedRoute path="/" component={NavBarContainer} />

    </header>
    <Switch>
      <Route exact path="/spots/:id" component={SpotShowContainer} />
      <SpotIndexContainer />
    </Switch>
  </div>
);

export default App;
