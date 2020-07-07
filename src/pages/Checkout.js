import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { getUser, getToken } from "../Utils/Common";
import axios from "axios";
import Header from "../components/Header";
export default class Checkout extends React.Component {
  state = {
    ListCart: {
      items: [
        {
          _id: "",
          userId: "",
          productId: {
            _id: "",
            name: "",
            nameURL: "",
            img: "",
            price: 0,
            id: "",
          },
          count: 0,
          createdAt: "",
          updatedAt: "",
          __v: 0,
        },
      ],
    },
  };
  componentDidMount() {
    const token = getToken();
    if (token) {
      axios
        .get("https://amadeuss.herokuapp.com/api/cart/itemshowall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const ListCart = response.data;
          this.setState({ ListCart });
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }
  render() {
    const formatter = new Intl.NumberFormat("vi-VI", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    });
    const sum = () => {
      var sum = 0;
      this.state.ListCart.items.forEach((item) => {
        sum += item.productId.price * item.count;
      });
      return sum;
    };
    const totalNumber = () => {
      var total = 0;
      this.state.ListCart.items.forEach((item) => {
        total += item.count;
      });
      return total;
    };
    const createOrder = () => {
      const user = getUser();
      console.log("user", user);
      const token = getToken();
      if (token) {
        return fetch("https://amadeuss.herokuapp.com/order/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            email: user.email,
          }),
        })
          .then((response) => {
            console.log("response", response);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    return (
      <div>
        <Header />
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
                        <th></th>
                        <td></td>
                      </tr>
                      <tr>
                      <th>Thành tiền</th>
                      <td>{sum()}</td>
                      </tr>
                    </tbody>
                    <tfoot></tfoot>
                  </table>
                </div>
              </div>
            <div className="mt-4">
                <button onClick={createOrder} className="btn-danger btn col-lg-12">
                  Thanh toán
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    );
  }
}
