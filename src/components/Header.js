import React from "react";
import "./Header.css";
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
                  src="https://legion.lenovo.com/assets/images/team/r2F6RMUvaIMLkJHe.png"
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
              className="col-lg-1 p-0 collapse navbar-collapse"
              id="collapsibleNavId"
            >
              <div className="navbar-nav nav-item ml-auto">
                <a className="nav-link mr-auto" href="#">
                  <i className="far fa-shopping-cart    " />
                </a>
                {/* <a className="nav-link ml-auto" href="#">
                  <i className="far fa-search    " />
                </a> */}
                <a
                  className="nav-link ml-auto"
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i className="far fa-search    " />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="collapse" id="collapseExample">
          <div className="container">
            <div className="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
