import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
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
