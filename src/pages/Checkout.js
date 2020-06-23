import React from "react";
import PropTypes from "prop-types";
import "./Checkout.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
Checkout.propTypes = {};
function Checkout(props) {
  return (
    <div
      className="page-header section-dark"
      style={{
        backgroundImage:
          "url(https://cdnb.artstation.com/p/assets/images/images/007/382/309/large/nastya-friday-game-background-1.jpg?1505758821)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="cart-form">
              <div className="payment">
                <h5>Chọn hình thức thanh toán</h5>
                <form>
                  <div className="radio">
                    <label>
                      <input type="radio" />
                      Thanh toán bằng tài khoản
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" />
                      Thanh toán qua momo
                    </label>
                    <img
                      alt="icon momo"
                      className="img-fluid img-icon-momo"
                      src="https://static.mservice.io/img/logo-momo.png"
                    />
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" />
                      Thanh toán qua thẻ Napas
                    </label>
                    <img
                      alt="icon napas"
                      className="img-fluid img-icon-napas"
                      src="https://m.thebank.vn/uploads/2019/07/30/thebank_napaslaginogiupgichocachoatdongthanhtoanhiennay_1564459302.png"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="cart-form mt-2 mb-2">
              <div className="buyfor">
                <h5>Bạn mua cho ai?</h5>
                <form>
                  <div className="radio">
                    <label>
                      <input type="radio" />
                      Mua cho bản thân
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" />
                      Mua cho bạn bè
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
              <div className="cart-form text-center">
              <h5 className="text-white p-3">Hoá đơn</h5>
              <br />
                <div>
                  <table className="table-bill table text-white text-center">
                    <thead>
                    </thead>
                    <tbody>
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
                    </tbody>
                    <tfoot></tfoot>
                  </table>
                </div>
              </div>
            <div className="mt-4">
              <Link to="cam-on">
                <button className="btn-danger btn col-lg-12">
                  Thanh toán
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
export default Checkout;
