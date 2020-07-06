import React, { useState, useEffect } from "react";
import Product from "../components/ProductInline";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import ProductBlock from "../components/ProductBlock";

function ProductList(props) {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const products = await axios.get(
        `https://amadeuss.herokuapp.com/products`
      );
      setProducts(products.data);
    })();
  }, []);
  console.log(products);

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
          <div className="col-12 col-md-3 pr-3"><h4 className="text-white mt-3">Sắp xếp sản phẩm</h4>
          <hr className="border-white mt-2" /></div>
          <div className="col-12 col-md-9 pl-5">
            {products.map((value, key) => {
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
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
