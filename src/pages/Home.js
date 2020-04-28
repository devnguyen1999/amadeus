import React from "react";
import Product from "../components/Product";
import data from "../product-data.json";
import "./Home.css";
Home.propTypes = {};

function Home(props) {
  return (
    <div>
      <div id="carouselId" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselId" data-slide-to={0} className="active" />
          <li data-target="#carouselId" data-slide-to={1} />
          <li data-target="#carouselId" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              src="https://compass-ssl.xbox.com/assets/05/75/0575153b-9efa-4620-8afe-b6980200f60f.jpg?n=215489_Page-Hero-1084_1920x720.jpg"
              className="img-fluid"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.imgur.com/6mjaYdD.png"
              className="img-fluid"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.imgur.com/R095ZFO.jpg"
              className="img-fluid"
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
      <div className="container-fluid">
        <div className="row mx-5">
          <div className="col-lg-3"></div>
          <div className="col-lg-9">
            <div className="row my-3">
              {data.map((value, key) => {
                return (
                  <Product
                    key={key}
                    prId={value.id}
                    prImg={value.prImg}
                    prTitle={value.prTitle}
                    prPrice={value.prPrice}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
