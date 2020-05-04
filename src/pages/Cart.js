import React from "react";
import PropTypes from "prop-types";
import "./Cart.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
        <div className="row-cart row">
          <div className="col-lg-9">
            <div className="cart-retangle">
              <form>
                <div className="cart-overflow">
                  <table className="table table-cart">
                    <thead>
                      <tr>
                        <th className="h5 text-black">Hình ảnh</th>
                        <th className="h5 text-black">Tên sản phẩm</th>
                        <th className="h5 text-black">Giá</th>
                        <th className="h5 text-black">Số lượng</th>
                        <th className="h5 text-black">Tổng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            alt=""
                            className="img-fluid img-fluid-cart"
                            src="https://2.bp.blogspot.com/-Zlw6uk46-fk/XFvWcaR1j8I/AAAAAAAABFY/c1SbQPM-mmE30oEueKqhaHreopfc1uRZQCLcBGAs/s400/31f4aa6d-26da-49c4-a227-3077623e7df3.jpg"
                          />
                        </td>
                        <td>
                          <h5 className="text-black">
                            Play Unknow Battle Ground
                          </h5>
                        </td>
                        <td>
                          <h5 className="text-black">500.000</h5>
                        </td>
                        <td>
                          <div className="input-group input-group-cart mb3">
                            <a className="btn-cart btn-quantity btn-outline-cart">
                              -
                            </a>
                            <div className="form-control form-control-cart text-center">
                              1
                            </div>
                            <a className="btn-cart btn-quantity btn-outline-cart">
                              +
                            </a>
                          </div>
                        </td>
                        <td>
                          <h5 className="text-black">500.000</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            alt="game-img"
                            className="img-fluid img-fluid-cart"
                            src="https://2.bp.blogspot.com/-Zlw6uk46-fk/XFvWcaR1j8I/AAAAAAAABFY/c1SbQPM-mmE30oEueKqhaHreopfc1uRZQCLcBGAs/s400/31f4aa6d-26da-49c4-a227-3077623e7df3.jpg"
                          />
                        </td>
                        <td>
                          <h5 className="text-black">
                            Play Unknow Battle Ground
                          </h5>
                        </td>
                        <td>
                          <h5 className="text-black">500.000</h5>
                        </td>
                        <td>
                          <div className="input-group input-group-cart mb3">
                            <a className="btn-cart btn-quantity btn-outline-cart">
                              -
                            </a>
                            <div class="form-control form-control-cart text-center">
                              1
                            </div>
                            <a class="btn-cart btn-quantity btn-outline-cart">
                              +
                            </a>
                          </div>
                        </td>
                        <td>
                          <h5 className="text-black">500.000</h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            alt="game-img"
                            className="img-fluid img-fluid-cart"
                            src="https://2.bp.blogspot.com/-Zlw6uk46-fk/XFvWcaR1j8I/AAAAAAAABFY/c1SbQPM-mmE30oEueKqhaHreopfc1uRZQCLcBGAs/s400/31f4aa6d-26da-49c4-a227-3077623e7df3.jpg"
                          />
                        </td>
                        <td>
                          <h5 className="text-black">
                            Play Unknow Battle Ground
                          </h5>
                        </td>
                        <td>
                          <h5 className="text-black">500.000</h5>
                        </td>
                        <td>
                          <div className="input-group input-group-cart mb3">
                            <a className="btn-cart btn-quantity btn-outline-cart">
                              -
                            </a>
                            <div class="form-control form-control-cart text-center">
                              1
                            </div>
                            <a class="btn-cart btn-quantity btn-outline-cart">
                              +
                            </a>
                          </div>
                        </td>
                        <td>
                          <h5 className="text-black">500.000</h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
            <div className="row col-lg-12 coupon">
              <input
                type="text"
                className="form-control col-lg-6"
                placeholder="Nhập mã giảm giá"
              />
              <button className="btn-cart btn-coupon col-lg-3">Áp dụng</button>
            </div>
            <a href="#" className="text-red">
              Tiếp tục mua hàng
            </a>
          </div>
          <div className="col-lg-3">
            <div className="bill">
              <div>
                <table className="table table-bill">
                  <thead>
                    <tr className="bill-title">
                      <h5>Hóa đơn</h5>
                    </tr>
                  </thead>
                  <tr>
                    <th>
                      <h5>Số lượng</h5>
                    </th>
                    <td>
                      <h5>3</h5>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <h5>Tổng tiền</h5>
                    </th>
                    <td>
                      <h5>1.500.000</h5>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <h5>Giá giảm</h5>
                    </th>
                    <td>
                      <h5>300.000</h5>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <h5>Thành tiền</h5>
                    </th>
                    <td>
                      <h5>1.200.000</h5>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div>
              <Link className="" to="/thanh-toan">
                <button className="btn-checkout btn-cart col-lg-12">
                  Tiến hành thanh toán
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
