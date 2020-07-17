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
import ProductList from "../pages/ProductList";
import Search from "../pages/Search";
import SeeMore from "../pages/SeeMore";
import Undefine from "../pages/undefine"
function NavigationURL(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/undefine">
          <Undefine />
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
        <Route path="/nguoi-dung">
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
        <Route path="/thanh-toan">
          <Checkout />
        </Route>
        <Route path="/cam-on">
          <Thankfor />
        </Route>
        
        <Route path="/tim-kiem">
          <Search />
        </Route>
        <Route path="/promotion" component={SeeMore}></Route>
        <Route path="/latest" component={SeeMore}></Route>
        <Route path="/all" component={SeeMore}></Route>
        <Route path="/bill/:_id" component={DetailBill}></Route>
        <Route path="/the-loai/:category/:slug" component={ChiTietSP}></Route>
        <Route path="/the-loai/:category" component={ProductList}></Route>

        <Route path="/:slug" component={ChiTietSP}></Route>
      </Switch>
    </div>
  );
}

export default NavigationURL;
