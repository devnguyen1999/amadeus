import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import error from "../Asset/Img/error.png"
Undefine.propTypes = {};
function Undefine() {
  return (
    <div>
      <Header />
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(https://cdnb.artstation.com/p/assets/images/images/007/382/309/large/nastya-friday-game-background-1.jpg?1505758821)",
        }}
      >
        <div className="row justify-content-center">
              <div className=" text-center m-4 p-1">
                  <h3 className="mt-3">Oop! Đã xảy ra lỗi</h3>
                  <img alt={error} className="img-success img-fluid" src={error} />
                  <div className="row">
                <Link className="px-0 mx-0 col-lg-12" to="/">
                  <h4 >Trở lại cửa hàng</h4>
                </Link>
                </div>
              </div>
            </div>
      </div>
      <Footer />
    </div>
  );
}
export default Undefine;