import React from "react";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Data from "../product-data.json";
import "./Home.css";
import axios from 'axios';




export default class Home extends React.Component{
  state = {
    ListData: []
    
  }
  
  componentDidMount() {
    axios.get(`https://amadeuss.herokuapp.com/products`)
      .then(res => {
        const ListData = res.data;
        this.setState({ ListData });
      
      })
      .catch(error => console.log(error));
  }



render(){
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
        <div className="row">
          <div className="col-12 col-md-3">
          <a
                className="btn d-block"
                data-toggle="collapse"
                href="#sortMenu"
                role="button"
                aria-expanded="false"
                aria-controls="sortMenu"
              >
                <h4 className="text-white m dropdown-toggle">Sắp xếp theo</h4>
                <hr className="border-white mt-2" />
              </a>
              <div className="collapse" id="sortMenu">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link text-white"
                    id="v-pills-ascending-tab"
                    data-toggle="pill"
                    href="#v-pills-ascending"
                    role="tab"
                    aria-controls="v-pills-ascending"
                    aria-selected="true"
                  >
                    Giá tăng dần
                  </a>
                  <a
                    className="nav-link text-white"
                    id="v-pills-decrease-tab"
                    data-toggle="pill"
                    href="#v-pills-decrease"
                    role="tab"
                    aria-controls="v-pills-decrease"
                    aria-selected="false"
                  >
                    Giá giảm dần
                  </a>
                  <a
                    className="nav-link text-white"
                    id="v-pills-latest-tab"
                    data-toggle="pill"
                    href="#v-pills-latest"
                    role="tab"
                    aria-controls="v-pills-latest"
                    aria-selected="false"
                  >
                    Mới nhất
                  </a>
                </div>
              </div>
              <a
                className="btn d-block"
                data-toggle="collapse"
                href="#filterMenu"
                role="button"
                aria-expanded="false"
                aria-controls="filterMenu"
              >
                <h4 className="text-white m dropdown-toggle">
                  Bộ lọc sản phẩm
                </h4>
                <hr className="border-white mt-2" />
              </a>
              <div className="collapse" id="filterMenu"></div>
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              {this.state.ListData.map((value, key) => {
    
                return (
                  <Product
                    key={key}
                    prID={value.id}
                    prImg={value.img}
                    prURL={value.nameURL}
                    prTitle={value.name}
                    prPrice={value.price} 
                  />
                );
              
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
 }
