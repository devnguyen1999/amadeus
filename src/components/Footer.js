import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div>
      <footer className="d-flex flex-column">
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex flex-column">
                <a className="footer-logo d-flex flex-row my-2" to="#">
                  <img
                    src="https://i.ya-webdesign.com/images/avengers-a-logo-png-3.png"
                    className="img-fluid mr-3"
                    alt="Logo"
                  />
                  <h5 className="my-auto">Amadeus</h5>
                </a>
                <span className="my-2">WINNER DOESN'T TAKE IT ALL</span>
                <span className="my-2">
                  Đại học Quốc gia Thành phố Hồ Chí Minh
                </span>
                <span className="my-2">Trường Đại học Công nghệ Thông tin</span>
              </div>
              <div class="col-lg-4 d-flex flex-column">
                <div className="footer-logo d-flex flex-row my-2">
                  <div className></div>
                  <div className="footer-space"></div>
                  <h5 className="my-auto">Địa chỉ</h5>
                </div>
                <span className="my-2">Trường Đại học Công nghệ Thông tin</span>
                <span className="my-2">Khoa Mạng máy tính và Truyền thông</span>
                <span className="my-2">MMTT2017</span>
              </div>
              <div class="col-lg-4 d-flex flex-column">
                <div className="footer-logo d-flex flex-row my-2">
                  <div className="footer-space"></div>
                  <h5 className="my-auto">Liên hệ với chúng tôi</h5>
                </div>
                <a className="footer-logo d-flex flex-row my-2" to="#">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    className="img-fluid mr-3"
                    alt="Logo"
                  />
                  <span className="my-2">Facebook</span>
                </a>
                <a className="footer-logo d-flex flex-row my-2" to="#">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    className="img-fluid mr-3"
                    alt="Logo"
                  />
                  <span className="my-2">Github</span>
                </a>
                <a className="footer-logo d-flex flex-row my-2" to="#">
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png"
                    className="img-fluid mr-3"
                    alt="Logo"
                  />
                  <span className="my-2">Discord</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5">
          <p className="m-0 text-center text-white">Refund Shop 2020</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
