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
    <div
      className="page-header-cart section-dark-cart"
      style={{
        backgroundImage: "url(https://wallpapercave.com/wp/OY4AvGh.jpg)",
      }}
    >
      <div className="container">
        <div className="row p-4">
          <div className="col-lg-9">
            <div className="cart-form">
                  <table className="table text-white text-center">
                    <thead>
                      <tr>
                        <th className="text-black">Hình ảnh</th>
                        <th className="text-black">Tên</th>
                        <th className="text-black">Giá</th>
                        <th className="text-black">Số lượng</th>
                        <th className="text-black">Tổng</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                    <tfoot></tfoot>
                  </table>
            </div>
            <div className="row coupon p-3">
                        <input type="text"
                               className="form-control col-lg-6"
                               placeholder="Nhập mã giảm giá" />
                        <button className="btn btn-primary col-lg-3">Áp dụng</button>
                    </div>
            <a href="#" className="text-red">
              Tiếp tục mua hàng
            </a>
          </div>
          <div className="col-lg-3">
            <div className="cart-form text-center">
              <h5 className="text-white p-3">Hoá đơn</h5>
              <br />
              <div className="align-items-center" style={{}}>
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
                  <button className="btn btn-danger col-lg-12">
                    Tiến hành thanh toán
                  </button>
                </Link>
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Cart;
