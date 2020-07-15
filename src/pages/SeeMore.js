import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import ProductBlock from "../components/ProductBlock";
import Carousel from "../components/Carousel";

function SeeMore(props) {
  const [stt, setStt] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const products = await axios.get(
        `https://amadeuss.herokuapp.com/products`
      );
      if (props.location.state.type === "promotion") {
        let arrPr = [];
        products.data.map((value, key) => {
          if (value.priceFake !== 0) {
            arrPr.push(value);
          }
        });
        setProducts(arrPr);
      }
      if (props.location.state.type === "latest") {
        setProducts(products.data.reverse());
      }
      if (props.location.state.type === "all") {
        setProducts(products.data);
      }
    })();
  }, []);
  console.log(products);
  const ascending = () => {
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
    setProducts(handled);
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
    setProducts(handled);
    setStt(2);
  };

  return (
    <div>
      <Header />
      <Carousel/>
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
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SeeMore;
