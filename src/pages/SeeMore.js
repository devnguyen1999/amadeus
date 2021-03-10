import React, { } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBlock from "../components/ProductBlock";
import Carousel from "../components/Carousel";
import { connect } from "react-redux";
import { fetchGames, sortGames, searhGames } from '../action/gamesAction';
import { Component } from "react";
class SeeMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: this.props.games,
      searchKey: '',
      loading: false
    }
    this.onInputSearchChange = this.onInputSearchChange.bind(this);
  }
  componentDidMount() {
    if (this.props.games === undefined) {
      this.props.fetchGames();
    };
  }
  handleSort = (games, sortKey) => {
    this.props.sortGames(games, sortKey);
    this.handleSetState(this.props.filteredItems);
  };
  onSearch = async (games, search) => {
    await this.props.searhGames(games, search);
    await this.handleSetState(this.props.searchItems);
  }
  handleSetState = (games) => {
    if (games !== undefined) {
      this.setState({
        games: games
      });
    }
  }
  onInputSearchChange(event) {
    this.setState({
      searchKey: event.target.value
    });
  }
  render() {
    const { games } = this.props;
    setInterval(() => {
      if (games !== undefined && this.state.games === undefined) {
        this.handleSetState(games);
      }
    }, 10)

    return (
      <div>
        <Header />
        <Carousel />
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
                  onClick={() => this.handleSort(this.state.games, 'lowest')
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
                  onClick={() => this.handleSort(this.state.games, 'highest')
                  }
                >
                  Giá giảm dần
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9 px-5">
              <div className="col-12 col-md-9 px-3 mt-3">
                <div
                  className="input-group form-inline mb-3 w-100"
                >
                  <input
                    name="keySearch"
                    className="form-control mr-sm-2"
                    placeholder="Nhập tên sản phẩm muốn tìm kiếm..."
                    type="search"
                    value={this.state.searchKey}
                    onChange={this.onInputSearchChange}
                  />
                  <button
                    className="btn btn-success"
                    onClick={() => this.onSearch(games, this.state.searchKey)}>
                    Tìm
                    </button>
                </div>
              </div>
              {!this.state.games ? (<div>...Loading</div>) : (
                this.state.games.map((value, key) => {
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

export default connect((state) => ({ games: state.games.items, filteredItems: state.games.filteredItems, searchItems: state.games.searchItems }), { fetchGames, sortGames, searhGames })(SeeMore);
