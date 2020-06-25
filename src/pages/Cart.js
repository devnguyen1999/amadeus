import React from "react";
import PropTypes from "prop-types";
import "./Cart.css";
import ItemCart from "../components/ItemCart"
import CartData from "../product-cart.json"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";
Cart.propTypes = {};
function Cart(props) {
  return (
    <div>
    <div
      className="page-header-cart section-dark-cart"
      style={{backgroundImage: "url(https://wallpapercave.com/wp/OY4AvGh.jpg)",}}
    >
      <div className="container">
        <div className="row" style={{paddingTop:50, paddingBottom:50}}>
          <div className="col-lg-9">
            <div className="d-flex justify-content-center"><h4 className="text-white">Đơn hàng</h4></div>
                      {CartData.map((value,key) =>{
                        return(
                          <ItemCart
                            key={key}
                            prCartImg={value.prCartImg}
                            prCartTitle={value.prCartTitle}
                            prCartPrice={value.prCartPrice}
                          />
                        );
                      })}
            <div className="row coupon pt-1">
                        <input type="text"
                               className="form-control col-lg-4 col-md-4 col-xs-4"
                               placeholder="Nhập mã giảm giá" />
                        <button className="btn btn-primary col-lg-3 col-md-3 col-xs-3">Áp dụng</button>
                    </div>
            <a href="#" className="text-red">
              Tiếp tục mua hàng
            </a>
          </div>
          <div className="col-lg-3">
          <div className="d-flex justify-content-center"><h4 className="text-white">Hoá đơn</h4></div>
            <div className="cart-form text-center mt-1">
              <div className="align-items-center">
                <table className="table-bill table text-white text-center">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <th>Số lượng</th>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th>Tổng tiền</th>
                      <td>1.500.000</td>
                    </tr>
                    <tr>
                      <th>Giá giảm</th>
                      <td>300.000</td>
                    </tr>
                    <tr>
                      <th>Thành tiền</th>
                      <td>1.200.000</td>
                    </tr>
                  </tbody>
                  <tfoot></tfoot>
                </table>
              </div>             
            </div>
            <div className="mt-2">
                <Link className="" to="/thanh-toan">
                  <button className="btn btn-danger col-lg-12 col-md-12 col-xs-12">
                    Tiến hành thanh toán
                  </button>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
export default Cart;
