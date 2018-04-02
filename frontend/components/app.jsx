import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route, Switch } from "react-router-dom";
import SpotIndexContainer from './spots/spot_index_container';
import SpotShowContainer from './spots/spot_show_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { ProtectedRoute, AuthRoute } from "../util/route_util";
import SearchContainer from './map/search_container';
import BookingIndexContainer from './bookings/booking_index_container';
import 'react-dates/initialize';


export default class App extends React.Component {

  render() {
    const headerContent = this.props.currentUser ?
      <NavBarContainer /> :
      <GreetingContainer />;

    return (
      <div>
        <header>
          { headerContent }
        </header>
        <Switch>
          <Route exact path="/spots/:id" component={SpotShowContainer} />
          <Route exact path="/search" component={SearchContainer}/>
          <Route exact path="/bookings" component={BookingIndexContainer} />
          <Route path="/" component={SpotIndexContainer} />
        </Switch>
      </div>
    );
  }
}
