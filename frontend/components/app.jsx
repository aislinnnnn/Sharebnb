import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <img
      className="app-image"
      src="https://www.holidayguru.ie/wp-content/uploads/2017/01/Galway-2000px.jpg"
    />
  </div>
);

export default App;
