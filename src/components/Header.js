import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
Header.propTypes = {};

function Header(props) {
  return (
    <div>
      <header className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark  p-0">
          <div className="container p-0">
            <div className="col-lg-2 p-0 d-flex">
              <Link className="navbar-brand" to="/">
                <img
                  src="https://refundtv.com/wp-content/uploads/2019/06/Refund_Gaming.png"
                  className="img-fluid mr-3"
                  alt="Logo"
                />
                Refund Shop
              </Link>
              <button
                className="navbar-toggler hidden-lg-up ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div
              className="col-lg-6 collapse navbar-collapse"
              id="collapsibleNavId"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown 1
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Action 1.1
                    </a>
                    <a className="dropdown-item" href="#">
                      Action 1.2
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown 2
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Action 2.1
                    </a>
                    <a className="dropdown-item" href="#">
                      Action 2.2
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown 3
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Action 3.1
                    </a>
                    <a className="dropdown-item" href="#">
                      Action 3.2
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 collapse navbar-collapse"
              id="collapsibleNavId"
            >
              <div className="navbar-nav nav-item ml-auto">
                <Link className="nav-link px-0 mx-0" to="/dang-nhap">
                  Đăng nhập
                </Link>
                <span className="text-light my-auto">&#160;/&#160;</span>
                <Link className="nav-link px-0 mx-0" to="/dang-ki">
                  Đăng ký
                </Link>
              </div>
            </div>
            <div
              className="col-lg-1 collapse navbar-collapse"
              id="collapsibleNavId"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <Link className="nav-link mr-auto" to="/gio-hang">
                    <i className="far fa-shopping-cart    " />
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="far fa-search    " />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right search-box" aria-labelledby="dropdownId">
                    <form className="input-group form-inline my-2 my-lg-0 w-100">
                      <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Nhập tên sản phẩm muốn tìm kiếm..."
                      />
                      <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                      >
                        Tìm kiếm
                      </button>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
