import React from "react";
import ItemCart from "../components/ItemCart";
import Footer from "../components/Footer";
import { getToken } from "../Utils/Common";
import { getUser } from "../Utils/Common";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import  reqlogin  from "../Asset/Img/reques-login.png";
import bag from "../Asset/Img/empty-cart.png"
import { connect } from "react-redux";
import {fetchCartFromLocalStorage} from "../action/cartAction";
class Cart extends React.Component {
  formatter = new Intl.NumberFormat("vi-VI", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  });
  componentDidMount() {
    if(this.props.carts === undefined) {
      this.props.fetchCartFromLocalStorage();
    }
  }
   sum = (items) => {
    var sum = 0;
    items.forEach((item) => {
      sum += item.price * item.qty;
    });
    return sum;
  };
  totalNumber = (items) => {
    var total = 0;
    items.forEach((item) => {
      total += item.qty;
    });
    return total;
  };
  deleteall = () => {
    const token = getToken();
    if (token) {
      return fetch("https://amadeuss.herokuapp.com/api/cart/destroycart", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
        });
    }
  };
  checkCart = (carts) => {
    var user = getUser();
    if (user != null) {
      if (carts.length !== 0) {
        return (
          <div className="row" style={{ paddingTop: 50, paddingBottom: 50 }}>
            <div className="col-lg-9">
              <div className="d-flex justify-content-center">
                <h4 className="text-white">Giỏ hàng</h4>
              </div>
              {carts.map((value, key) => {
                return (
                  <ItemCart
                    key={key}
                    img={value.img}
                    name={value.gameName}
                    price={value.price}
                    qty={value.qty}
                    id={value.id}
                  />
                );
              })}
              <div className="row p-1">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-left">
                  <button onClick={() =>this.sum(carts)} className="text-white btn">
                    Tiếp tục mua hàng
                  </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-right">
                  <button
                    onClick={() =>  this.deleteall}
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
                        <td>{this.totalNumber(carts)}</td>
                      </tr>
                      <tr>
                        <th>Tạm tính</th>
                        <td>{this.formatter.format(this.sum(carts))}</td>
                      </tr>
                      <tr>
                        <th>Thành tiền</th>
                        <td>{this.formatter.format(this.sum(carts))}</td>
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
                <img className="ml-4 img-fluid" alt={bag} src={bag} />
              <Link className="px-0 mx-0 col-lg-12" to="/">
                <h4>Trở lại cửa hàng</h4>
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
                <img className="ml-4 img-fluid" alt={reqlogin} src={reqlogin} />
              <Link className="px-0 mx-0 col-lg-12" to="/dang-nhap">
                <h4 >Đăng nhập</h4>
              </Link>
            </div>
        </div>
      );
    }
  };
  render() {
    // if(getToken() !== null && !this.props.carts) {
    //     this.props.fecthCart();
    // }
    const carts = this.props.carts;
    return (
      <div>
        <Header />
        <div
          className="page-header-cart section-dark-cart"
          style={{
            backgroundImage: "url(https://wallpapercave.com/wp/OY4AvGh.jpg)",
          }}
        >
          {
            !carts? (<div>Loading...</div>) : (
              <div className="container">{this.checkCart(carts)}</div>
            )
          }
        </div>
        <Footer />
      </div>
    );
  }
}
export default connect((state) => ({carts: state.cart.items}), {fetchCartFromLocalStorage})(Cart)
