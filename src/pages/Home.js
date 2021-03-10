import React from "react";
import ProductInline from "../components/ProductInline";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { connect } from "react-redux";
import {fetchGames} from '../action/gamesAction';
class Home extends React.Component {
  
  render() {
    if(this.props.games === undefined) {
      this.props.fetchGames();
    }
    let promotionCount = 0;
    const ListData = this.props.games;
    return (
      <div>
        <Header />
        <Carousel/>
        <div className="container my-3">
          <h4 className="text-white mt-3">Sản phẩm khuyến mãi</h4>
          <hr className="border-white mt-2" />
          <div className="row">
            {
              !ListData? (<div>Loading...</div>) : (
                ListData.map((value, key) => {
                  if (value.priceFake !== 0 && promotionCount < 6) {
                    promotionCount++;
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
                })
              )
            }
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Link
              className="text-white custom-link btn btn-primary"
              to={{
                pathname: "/all",
                state: { type: "all" },
              }}
            >
              Xem thêm sản phẩm
            </Link>
          </div>
          <h4 className="text-white mt-3">Sản phẩm mới nhất</h4>
          <hr className="border-white mt-2" />
          <div className="row">
            {
              !ListData? (<div>Loading...</div>) : (
                ListData.reverse().map((value, key) => {
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
                })
              )
            }
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Link
              className="text-white custom-link btn btn-primary"
              to={{
                pathname: "/all",
                state: { type: "all" },
              }}
            >
              Xem thêm sản phẩm
            </Link>
          </div>
          <h4 className="text-white mt-3">Tất cả sản phẩm</h4>
          <hr className="border-white mt-2" />
          <div className="row">
            {
              !ListData ? (
                <div>Loading...</div>
              ) : (
                ListData.reverse().map((value, key) => {
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
                })
              )
            }
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Link
              className="text-white custom-link btn btn-primary"
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
export default connect((state)=>({games: state.games.items}), {fetchGames})(Home);
