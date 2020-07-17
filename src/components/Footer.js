import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div>
      <footer className="d-flex flex-column">
        <div className="footer-content p-3">
          <div className="container p-2">
            <div className="row">
              <div className="col-lg-4 d-flex flex-column">
                <Link className="footer-logo d-flex flex-row my-2" to="/">
                  <img
                    src="https://archive-media-1.nyafuu.org/w/image/1460/06/1460067150711.png"
                    className="img-fluid mr-3"
                    alt="Logo"
                  />
                  <h5 className="my-auto">Amadeus Shop</h5>
                </Link>
                <span className="my-2">Lập trình ứng dụng mạng</span>
                <span className="my-2">
                  
                </span>
                {/* <span className="my-2">http://www.dungtran.top/</span> */}
              </div>
              <div className="col-lg-4 d-flex flex-column">
                <div className="footer-logo d-flex flex-row my-2">
                  <div className="footer-space"></div>
                  <h5 className="my-auto">Địa chỉ</h5>
                </div>
                <span className="my-2">Trường Đại học Công nghệ Thông tin</span>
                <span className="my-2">Khoa Mạng máy tính và Truyền thông</span>
                <span className="my-2">MMTT2017</span>
              </div>
              <div className="col-lg-4 d-flex flex-column">
                <div className="footer-logo d-flex flex-row my-2">
                  <div className="footer-space"></div>
                  <h5 className="my-auto">Liên hệ với chúng tôi</h5>
                </div>
                <a
                  className="footer-icon d-flex flex-row my-2"
                  href="https://www.facebook.com/Amadeushop-101903708243960/"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    className="img-fluid mr-3"
                    alt="Logo"
                  />
                  <span className="my-2">Facebook</span>
                </a>
                <a
                  className="footer-icon d-flex flex-row my-2"
                  href="https://github.com/thanhdevil9699"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    className="img-fluid mr-3"
                    alt="Logo"
                  />
                  <span className="my-2">Github</span>
                </a>
                <a
                  className="footer-icon d-flex flex-row my-2"
                  href="https://discord.gg/xeSFUXk"
                >
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
