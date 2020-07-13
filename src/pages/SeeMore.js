import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import ProductBlock from "../components/ProductBlock";
import { useParams } from "react-router-dom";

const toSlug = (str) => {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, "");

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, "");

  // return
  return str;
};

function SeeMore(props) {
  const [stt, setStt] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const products = await axios.get(
        `https://amadeuss.herokuapp.com/products`
      );
      setProducts(products.data);
    })();
  }, []);
  const ascending = (event) => {
    let handled = products;
    for (let i = 1; i < handled.length; i++) {
      let j = i - 1;
      let temp = handled[i];
      while (j >= 0 && handled[j].price > temp.price) {
        handled[j + 1] = handled[j];
        j--;
      }
      handled[j + 1] = temp;
    }
    console.log("Gia tang dan");
    setProducts(handled);
    const arr = handled;
    setProducts(arr);
    setStt(1);
  };
  const decrease = () => {
    let handled = products;
    for (let i = 1; i < handled.length; i++) {
      let j = i - 1;
      let temp = handled[i];
      while (j >= 0 && handled[j].price < temp.price) {
        handled[j + 1] = handled[j];
        j--;
      }
      handled[j + 1] = temp;
    }
    console.log("Gia giam dan");
    const arr = handled;
    setProducts(arr);
    setStt(2);
  };
  const latest = () => {};
  return (
    <div>
      <Header />
      <div id="carouselId" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselId" data-slide-to={0} className="active" />
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
        <div className="row">
          <div className="col-12 col-md-3 pr-3">
            <h4 className="text-white mt-3">Sắp xếp sản phẩm</h4>
            <hr className="border-white mt-2" />
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link text-white sort-menu"
                type="button"
                data-toggle="pill"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
                onClick={(event) => {
                  ascending(event);
                }}
              >
                Giá tăng dần
              </a>
              <a
                className="nav-link text-white sort-menu"
                type="button"
                data-toggle="pill"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
                onClick={(event) => {
                  decrease(event);
                }}
              >
                Giá giảm dần
              </a>
            </div>
          </div>
          <div className="col-12 col-md-9 px-5">
            {products.map((value, key) => {
              if (props.location.state.type === "promotion") {
                if (value.priceFake !== 0) {
                  return (
                    <ProductBlock
                      key={key}
                      prID={value.id}
                      prImg={value.img}
                      prTitle={value.name}
                      prPrice={value.price}
                      prFake={value.priceFake}
                    />
                  );
                }
              }
              if (props.location.state.type === "latest") {
                return (
                  <ProductBlock
                    key={key}
                    prID={value.id}
                    prImg={value.img}
                    prTitle={value.name}
                    prPrice={value.price}
                    prFake={value.priceFake}
                  />
                );
              }
              if (props.location.state.type === "all") {
                return (
                  <ProductBlock
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SeeMore;
