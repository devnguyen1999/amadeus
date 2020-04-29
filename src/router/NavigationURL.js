import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import Thankfor from "../pages/Thankfor";
import Checkout from "../pages/Checkout";
import LienHe from "../pages/LienHe";
import NguoiDung from "../pages/User/NguoiDung.js";
import ChiTietSP from "../pages/chitietSP/ChiTietSP";
NavigationURL.propTypes = {};

function NavigationURL(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/lien-he">
          <LienHe />
        </Route>
        <Route exact path="/nguoi-dung">
          <NguoiDung />
        </Route>
        <Route exact path="/chi-tiet">
          <ChiTietSP />
        </Route>
        <Route path="/dang-nhap">
          <LogIn />
        </Route>
        <Route path="/dang-ki">
          <SignUp />
        </Route>
        <Route path="/gio-hang">
          <Cart />
        </Route>
        <Route exact path="/thanh-toan">
          <Checkout />
        </Route>
        <Route path="/cam-on">
          <Thankfor />
        </Route>
      </Switch>
    </div>
  );
}
export default NavigationURL;
