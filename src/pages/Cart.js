import React from "react";
import ItemCart from "../components/ItemCart";
import Footer from "../components/Footer";
import { getToken } from "../Utils/Common";
import axios from "axios";
import { getUser } from "../Utils/Common";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import  reqlogin  from "../Asset/Img/reques-login.png";
import bag from "../Asset/Img/empty-cart.png"
export default class Cart extends React.Component {
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
    const deleteall = () => {
      const token = getToken();
      if (token) {
        return fetch("https://amadeuss.herokuapp.com/api/cart/destroycart", {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            console.log(response);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error.response.data.message);
          });
      }
    };
    const checkCart = () => {
      var user = getUser();
      if (user != null) {
        if (this.state.ListCart.items.length != 0) {
          return (
            <div className="row" style={{ paddingTop: 50, paddingBottom: 50 }}>
              <div className="col-lg-9">
                <div className="d-flex justify-content-center">
                  <h4 className="text-white">Giỏ hàng</h4>
                </div>
                {this.state.ListCart.items.map((value, key) => {
                  return (
                    <ItemCart
                      key={key}
                      img={value.productId.img}
                      name={value.productId.name}
                      price={value.productId.price}
                      count={value.count}
                      id={value.productId.id}
                      idItem={value._id}
                    />
                  );
                })}
                <div className="row p-1">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-left">
                    <button onClick={sum} className="text-white btn">
                      Tiếp tục mua hàng
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-right">
                    <button
                      onClick={deleteall}
                      className="text-white btn btn-outline-danger"
                    >
                      Xoá giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex justify-content-center">
                  <h4 className="text-white">Tạm tính</h4>
                </div>
                <div className="cart-form text-center mt-1 p-2">
                  <div className="align-items-center">
                    <table className="table-bill table text-white text-center">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <th>Số lượng</th>
                          <td>{totalNumber()}</td>
                        </tr>
                        <tr>
                          <th>Tạm tính</th>
                          <td>{formatter.format(sum())}</td>
                        </tr>
                        <tr>
                          <th>Thành tiền</th>
                          <td>{formatter.format(sum())}</td>
                        </tr>
                      </tbody>
                      <tfoot></tfoot>
                    </table>
                  </div>
                </div>
                <div className="mt-2">
                  <Link className="" to="/thanh-toan">
                    <button className="btn btn-danger col-lg-12 col-md-12 col-xs-12">
                      Tiến hành đặt hàng
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="row justify-content-center">
              <div className="empty-form col-lg-6 text-center m-4 p-2">
                  <h3 className="mt-3">Oop! Giỏ hàng trống</h3>
                  <img className="ml-4 img-fluid" src={bag} />
                <Link className="px-0 mx-0 col-lg-12" to="/">
                  <a className="h4">Trở lại cửa hàng</a>
                </Link>
              </div>
            </div>
          );
        }
      } else {
        return (
          <div className="row justify-content-center">
            <div className="empty-form col-lg-6 text-center m-4 p-2">
                  <h3 className="mt-3">Bạn chưa đăng nhập</h3>
                  <img className="ml-4 img-fluid" src={reqlogin} />
                <Link className="px-0 mx-0 col-lg-12" to="/dang-nhap">
                  <a className="h4">Đăng nhập</a>
                </Link>
              </div>
          </div>
        );
      }
    };
    return (
      <div>
        <Header />
        <div
          className="page-header-cart section-dark-cart"
          style={{
            backgroundImage: "url(https://wallpapercave.com/wp/OY4AvGh.jpg)",
          }}
        >
          <div className="container">{checkCart()}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
