import React from "react";
import Product from "../components/Product";
import Footer from "../components/Footer";
import Data from "../product-data.json";
import "./Home.css";
import axios from 'axios';

<<<<<<< HEAD



export default class Home extends React.Component{
  state = {
    ListData: []
=======
export default class Home extends React.Component{

  state = {
    listdata: []
>>>>>>> 302c5fce4d9890609bbba769ab9e637932a4a0e4
  }

  componentDidMount() {
    axios.get(`https://amadeuss.herokuapp.com/products`)
      .then(res => {
<<<<<<< HEAD
        const ListData = res.data;
        this.setState({ ListData });
      })
      .catch(error => console.log(error));
  }
render(){
=======
        const listdata = res.data;
        this.setState({ listdata });
      })
      .catch(error => console.log(error));
  }

render() {
>>>>>>> 302c5fce4d9890609bbba769ab9e637932a4a0e4
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
            
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
<<<<<<< HEAD
              {this.state.ListData.map((value, key) => {
                return (
                  <Product
                    key={key}
                    prID={value.id}
=======
              {this.state.listdata.map((value, key) => {
                return (
                  <Product
                    key={key}
>>>>>>> 302c5fce4d9890609bbba769ab9e637932a4a0e4
                    prImg={value.img}
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
<<<<<<< HEAD
 }
=======

}
>>>>>>> 302c5fce4d9890609bbba769ab9e637932a4a0e4
