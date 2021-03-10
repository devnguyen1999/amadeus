import React from "react";
import $ from "jquery";

import DieuHuong from "./ThongTin.js";
import axios from "axios";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from '../../action/cartAction'
import {countItemInCart} from '../../action/counterAction'
class ChiTietSP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      HienThi: true,
      ChuyenHuong: false,
      ChuyenHuong404: false,
      ListData: {
        vote: 0,
        category: [],
        _id: "",
        name: "",
        nameURL: "",
        img: "",
        imgHD: "",
        decription: "",
        conf: "",
        producer: "",
        price: 0,
        number: 0,
        createAt: "",
        _v: 0,
        reviews: [
          {
            _id: "",
            title: "",
            vote: 0,
            content: "",
            productId: "",
            userId: {
              _id: "",
              username: "",
            },
            createAt: "",
          },
        ],
        id: "",
      },
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://amadeuss.herokuapp.com/products/${this.props.match.params.slug}`
      )
      .then((res) => {
        const ListData = res.data;
        this.setState({ ListData });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          this.setState({ error: error.response.data.message });
          console.log(this.state.error);
          this.setState({ ChuyenHuong404: true });
        }
      });


    $("#1").on("click", function () {
      $("#1").css("background", "#D63031");
      $("#2").css("background", "rgba(255, 255, 255, 0.1)");
    });

    $("#2").on("click", function () {
      $("#2").css("background", "#D63031");
      $("#1").css("background", "rgba(255, 255, 255, 0.1)");
    });
  }

  handleClickAddToCart = (game) => {
    this.props.addToCart(game);
    this.props.countItemInCart();
  }
  handleBuyNow = (game) =>{
    this.props.addToCart(game);
    this.props.countItemInCart();
  }
  render() {
    const formatter = new Intl.NumberFormat("vi-VI", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    });
    if (this.state.ChuyenHuong404) {
      return <Redirect to="/undefine" />;
    }
    if (this.state.ChuyenHuong) {
      return <Redirect to="/gio-hang" />;
    }

    ////
    var fake;
    if (this.state.ListData.priceFake > 0) {
      fake = (
        <div>
          <p
            className="text-warning gia pb-0 mb-0"
            style={{ textDecoration: "line-through" }}
          >
            {" "}
            {formatter.format(this.state.ListData.priceFake)}
          </p>
          <p className="text-warning gia pt-0 mt-0">
            {" "}
            {formatter.format(this.state.ListData.price)}
          </p>
        </div>
      );
    } else {
      fake = (
        <p className="text-warning gia pt-0 mt-0">
          {" "}
          {formatter.format(this.state.ListData.price)}
        </p>
      );
    }
    return (
      <div>
        <Header />
        {
          !this.state.ListData ? (<div>Loading...</div>) :
            (
              <div
                className="container-fluid p-2"
                style={{
                  backgroundColor: "black",
                }}
              >
                <div className="jumbotron p-0">
                  <img
                    src={this.state.ListData.imgHD}
                    className="img-fluid mx-auto d-block p-0"
                    alt="img"
                    style={{ maxHeight: 560, width: "100%" }}
                  />
                </div>
                {/*sản phẩm */}

                <div className="container mt-3">
                  <div
                    className="jumbotron row p-4"
                    style={{ background: "rgba(60, 60, 60, 0.5)" }}
                  >
                    <div className="col-xl-3 col-lg-3 col-md-3 align-content-center justify-content-center img-game">
                      <img
                        src={this.state.ListData.img}
                        alt="Product"
                        className="img-game-2 p-3"
                      />
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-5 column ">
                      <h2 className="text-light">{this.state.ListData.name}</h2>
                      <p className="text-light eclipse-text">
                        {this.state.ListData.decription}
                      </p>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-4 column">
                      <p className="text-light text">Giá sản Phẩm: </p>

                      {fake}

                      <div className="column justify-content-center">
                        <button className="col-12 btn btn-danger text-white mb-1"
                          onClick={() => this.handleBuyNow(this.state.ListData)}
                        >
                          Mua ngay
                    </button>
                        <button
                          className="col-12 btn text-white"
                          style={{ background: "#00B894" }}
                          onClick={() => { this.handleClickAddToCart(this.state.ListData) }}
                        >
                          Thêm vào giỏ hàng
                    </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Button  */}
                <div className="container mb-3">
                  <div
                    className="jumbotron row p-4 row"
                    style={{ background: "black" }}
                  >
                    <button
                      className="btn col-xl-3 col-lg-3 col-md-3 col-5 col-sm-5 mr-2 mb-2 btn-danger text-white"
                      onClick={() => this.setState({ HienThi: true })} id="1"
                    >
                      Thông tin game
                </button>
                    <button
                      className="btn col-xl-3 col-lg-3 col-md-3 col-6 col-sm-5 mb-2  text-white"
                      onClick={() => this.setState({ HienThi: false })}
                      style={{ background: "rgba(255, 255, 255, 0.1)" }} id="2"
                    >
                      Cấu hình yêu cầu
                </button>
                  </div>
                </div>

                {/*Button  */}

                <div className="container">
                  <DieuHuong HT={this.state.HienThi} DATA={this.state.ListData} />
                </div>
                <Footer />
              </div>
            )
        }
      </div>
    );
  }
}
export default connect((state) => ({}), { addToCart, countItemInCart})(ChiTietSP);