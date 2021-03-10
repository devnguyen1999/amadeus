import React, { } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBlock from "../components/ProductBlock";
import Carousel from "../components/Carousel";
import { connect } from "react-redux";
import { fetchGames, sortGames} from '../action/gamesAction';
import { Component } from "react";
class SeeMore extends Component {
  render() {
    if(this.props.games === undefined) {
      this.props.fetchGames();
    }
    console.log(this.props.games);
    const handleSort = (sortKey) => {
      this.props.sortGames(this.props.games, sortKey);
    }
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
                <div
                  className="nav-link text-white sort-menu"
                  type="button"
                  data-toggle="pill"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                  onClick={() => handleSort('lowest')
                  }
                >
                  Giá tăng dần
                </div>
                <div
                  className="nav-link text-white sort-menu"
                  type="button"
                  data-toggle="pill"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                  onClick={() => handleSort('')
                  }
                >
                  Giá giảm dần
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9 px-5">
              {!this.props.games ? (<div>...Loading</div>): (
                this.props.games.map((value, key) => {
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
                })
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect((state)=>({games: state.games.filteredItems}), {fetchGames, sortGames})(SeeMore);
