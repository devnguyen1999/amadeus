import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { getUser, getToken } from "../Utils/Common";
import axios from "axios";
import Bag from "../pages/User/bag";
const displayCheck = () => {
  var user = getUser();
  if (user != null) {
    return (
      <div  className="navbar-nav nav-item ml-auto">
        <Link className="nav-link px-0 mx-0" to="/nguoi-dung">
          {user.email}
        </Link>
      </div>
    );
  } else {
    return (
      <div  className="navbar-nav nav-item ml-auto">
        <Link className="nav-link px-0 mx-0" to="/dang-nhap">
          Đăng nhập
        </Link>
        <span className="text-light my-auto">&#160;/&#160;</span>
        <Link className="nav-link px-0 mx-0" to="/dang-ki">
          Đăng ký
        </Link>
      </div>
    );
  }
};

function Header(props) {
  return (
    <div>
      <header className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark  p-0">
          <div className="container p-0">
            <div className="col-lg-2 p-0 d-flex">
              <Link className="navbar-brand" to="/">
                <img
                  src="../amadeus.png"
                  className="img-fluid mr-3"
                  alt="Logo"
                />
                Amadeus
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
                <li className="nav-item dropdown mr-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Thể loại
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Chiến thuật
                    </a>
                    <a className="dropdown-item" href="#">
                      Đua xe
                    </a>
                    <a className="dropdown-item" href="#">
                      Hành động
                    </a>
                    <a className="dropdown-item" href="#">
                      Kinh dị
                    </a>
                    <a className="dropdown-item" href="#">
                      Phiêu lưu
                    </a>
                    <a className="dropdown-item" href="#">
                      Thể thao
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown mr-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Danh mục
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      CD game PS4
                    </a>
                    <a className="dropdown-item" href="#">
                      CD game PS5
                    </a>
                    <a className="dropdown-item" href="#">
                      Game trên Battle.net
                    </a>
                    <a className="dropdown-item" href="#">
                      Game trên Origin
                    </a>
                    <a className="dropdown-item" href="#">
                      Game trên Steam
                    </a>
                    <a className="dropdown-item" href="#">
                      Máy chơi game
                    </a>
                    <a className="dropdown-item" href="#">
                      Phụ kiện chơi game
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown mr-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Thông tin
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Hướng dẫn
                    </a>
                    <a className="dropdown-item" href="#">
                      Tin tức
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/lien-he">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 collapse navbar-collapse"
              id="collapsibleNavId"
            >
                {displayCheck()}
            </div>
            <div
              className="col-lg-1 collapse navbar-collapse"
              id="collapsibleNavId"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <Bag></Bag>
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
                  <div
                    className="dropdown-menu dropdown-menu-right search-box"
                    aria-labelledby="dropdownId"
                  >
                    <form className="input-group form-inline my-2 my-lg-0 w-100">
                      <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Nhập tên sản phẩm muốn tìm kiếm..."
                      />
                      <button
                        className="btn btn-outline-success m-0"
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
