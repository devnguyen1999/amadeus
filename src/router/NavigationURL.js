import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import Thankfor from "../pages/Thankfor";
import Checkout from "../pages/Checkout";
import LienHe from "../pages/LienHe";
import NguoiDung from "../pages/User/NguoiDung.js";
import ChiTietSP from "../pages/chitietSP/ChiTietSP";
import DetailBill from "../pages/User/DetailBill";

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
        <Route path="/lien-he">
          <LienHe />
        </Route>
        <Route  path="/nguoi-dung">
          <NguoiDung />
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
        <Route path='/bill/:_id' component={DetailBill} ></Route>
        <Route path='/:slug' component={ChiTietSP} ></Route>
      </Switch>
    </div>
  );
}

export default NavigationURL;
