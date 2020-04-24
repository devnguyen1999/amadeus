import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
NavigationURL.propTypes = {};

function NavigationURL(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dang-nhap">
          <LogIn />
        </Route>
        <Route path="/dang-ki">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default NavigationURL;
