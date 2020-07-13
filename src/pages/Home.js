import React from "react";
import ProductInline from "../components/ProductInline";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Home extends React.Component {
  state = {
    ListData: [],
  };

  componentDidMount() {
    axios
      .get(`https://amadeuss.herokuapp.com/products`)
      .then((res) => {
        const ListData = res.data;
        this.setState({ ListData });
        console.log(ListData);
      })
      .catch((error) => console.log(error));
  }

  render() {
    let promotion = 0;
    return (
      <div>
        <Header />
        <div id="carouselId" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#carouselId"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselId" data-slide-to={1} />
            <li data-target="#carouselId" data-slide-to={2} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                src="https://wongstore.com/uploads/2/2020-04/15615.jpg"
                className="img-fluid d-block mx-auto"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://wongstore.com/uploads/2/2020-02/new_project.jpg"
                className="img-fluid d-block mx-auto"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://wongstore.com/uploads/2/2020-02/avenger2222.jpg"
                className="img-fluid d-block mx-auto"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselId"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselId"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container my-3">
          <h4 className="text-white mt-3">Sản phẩm khuyến mãi</h4>
          <hr className="border-white mt-2" />
          <div className="row">
            {this.state.ListData.map((value, key) => {
              if (value.priceFake !== 0 && promotion < 6) {
                promotion = promotion + 1;
                return (
                  <ProductInline
                    key={key}
                    prID={value.id}
                    prImg={value.img}
                    prTitle={value.name}
                    prPrice={value.price}
                    prFake={value.priceFake}
                  />
                );
              }
            })}
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Link
              className="text-white custom-link"
              to={{
                pathname: "/promotion",
                state: { type: "promotion" },
              }}
            >
              Xem thêm sản phẩm
            </Link>
          </div>
          <h4 className="text-white mt-3">Sản phẩm mới nhất</h4>
          <hr className="border-white mt-2" />
          <div className="row">
            {this.state.ListData.map((value, key) => {
              if (key < 6) {
                return (
                  <ProductInline
                    key={key}
                    prID={value.id}
                    prImg={value.img}
                    prTitle={value.name}
                    prPrice={value.price}
                    prFake={value.priceFake}
                  />
                );
              }
            })}
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Link
              className="text-white custom-link"
              to={{
                pathname: "/latest",
                state: { type: "latest" },
              }}
            >
              Xem thêm sản phẩm
            </Link>
          </div>
          <h4 className="text-white mt-3">Tất cả sản phẩm</h4>
          <hr className="border-white mt-2" />
          <div className="row">
            {this.state.ListData.map((value, key) => {
              if (key < 6) {
                return (
                  <ProductInline
                    key={key}
                    prID={value.id}
                    prImg={value.img}
                    prTitle={value.name}
                    prPrice={value.price}
                    prFake={value.priceFake}
                  />
                );
              }
            })}
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Link
              className="text-white custom-link"
              to={{
                pathname: "/all",
                state: { type: "all" },
              }}
            >
              Xem thêm sản phẩm
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
