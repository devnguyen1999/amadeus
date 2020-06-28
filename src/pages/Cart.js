import React from "react";
import PropTypes from "prop-types";
import "./Cart.css";
import ItemCart from "../components/ItemCart"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { getToken } from "../Utils/Common";
import axios from "axios";
export default class Cart extends React.Component{
  state = {
    ListCart:{
      items:[{
      _id: "",
      userId: "",
      productId: {
                _id: "",
                name: "",
                nameURL: "",
                img: "",
                price: 0,
                id: ""
            },
      count: 0,
      createdAt: "",
      updatedAt: "",
      __v: 0,
    }]
    }
  };
  componentDidMount() {
      const token = getToken();
      if(token){
        axios.get("https://amadeuss.herokuapp.com/api/cart/itemshowall", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then(response => {
          const ListCart = response.data;
          this.setState({ListCart});
        }).catch((error) => {
          console.log("error",error);
        })
  }
}
  render() {
    const deleteall = () => {
  
      const token = getToken();
      if (token) {
        return fetch("https://amadeuss.herokuapp.com/api/cart/destroycart", {
          method: "DELETE",
          headers: {
            'Authorization': `Bearer ${token}`
          },
        })
        .then((response) => {
          console.log(response);
          window.location.reload();       
        })
        .catch((error) => {
         
            console.log(error.response.data.message);
         
        })
      }
    }
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
                        {this.state.ListCart.items.map((value, key) =>{
                          return(
                            <ItemCart
                              key={key}
                              img={value.productId.img}
                              name={value.productId.name}
                              price={value.productId.price}
                              count={value.count}
                              id={value.productId.id}
                              idItem={value._id}
                             />
                          )
                        })}
                <div className="row p-1">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-left">
                  <button className="text-white btn">
                    Tiếp tục mua hàng
                  </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-right">
                  <button onClick={deleteall} className="text-white btn btn-outline-danger">Xoá giỏ hàng</button>
                  </div>
                </div>
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
};
