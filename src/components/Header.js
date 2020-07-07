import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getToken, getUser, removeUserSession } from "../Utils/Common";
import Bag from "../pages/User/bag";
import { useForm } from "react-hook-form";
import axios from "axios";

function Header(props) {
  const [loggedIn, setloggedIn] = useState(getToken() ? true : false);
  const { handleSubmit, register, errors, watch } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (values) => {
    setError(null);
    setLoading(true);
    console.log(values);
    const bodyParameters = {
      keySearch: values.keySearch,
    };
    axios
      .get("https://amadeuss.herokuapp.com/products/search", bodyParameters)
      .then((response) => {
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  const logOut = (event) => {
    setloggedIn(false);
    removeUserSession();
  };
  const displayCheck = () => {
    if (loggedIn) {
      var user = getUser();
      return (
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#!"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {user.username}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownId"
              >
                <Link className="dropdown-item" to="/nguoi-dung">
                  Trang cá nhân
                </Link>
                <a
                  type="button"
                  className="dropdown-item"
                  onClick={(event) => {
                    logOut(event);
                  }}
                >
                  Đăng xuất
                </a>
              </div>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="navbar-nav nav-item ml-auto">
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
  return (
    <div>
      <header className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <div className="container p-0">
            <div className="col-lg-2 p-0 d-flex">
              <Link className="navbar-brand" to="/">
                <img
                  src="../amadeus.svg"
                  className="img-fluid mr-3"
                  alt="Logo"
                />
                Amadeus Shop
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
                    href="#!"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Thể loại
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <Link className="dropdown-item" to="/the-loai/chien-thuat">
                      Chiến thuật
                    </Link>
                    <Link className="dropdown-item" to="/the-loai/hanh-dong">
                      Hành động
                    </Link>
                    <Link className="dropdown-item" to="/the-loai/kinh-di">
                      Kinh dị
                    </Link>
                    <Link className="dropdown-item" to="/the-loai/nhap-vai">
                      Nhập vai
                    </Link>
                    <Link className="dropdown-item" to="/the-loai/phieu-luu">
                      Phiêu lưu
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown mr-3">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#!"
                    id="dropdownId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Thông tin
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#!">
                      Hướng dẫn
                    </a>
                    <a className="dropdown-item" href="#!">
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
              className="col-lg-1 collapse navbar-collapse p-0"
              id="collapsibleNavId"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ml-3">
                  <Bag></Bag>
                </li>
                <li className="nav-item ml-3 dropdown">
                  <a
                    className="nav-link"
                    href="#!"
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
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="input-group form-inline my-2 my-lg-0 w-100"
                    >
                      <input
                        name="keySearch"
                        ref={register}
                        className="form-control mr-sm-2"
                        placeholder="Nhập tên sản phẩm..."
                        type="search"
                      />
                      <input
                        type="submit"
                        className="btn btn-success my-2 my-sm-0"
                        value={loading ? "Loading..." : "Tìm kiếm"}
                        disabled={loading}
                      />
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
