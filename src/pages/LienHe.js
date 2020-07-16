import React from "react";
import Header from "../components/Header";
LienHe.propTypes = {};

function LienHe(props) {
  return (
    <div>
      <Header/>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: "url(" + require("../Asset/Img/wl.jpg") + ")",
        }}
      >
        <div className="justify-content-center">
          <div
            className="justify-content-center d-flex"
            style={{ width: "100%" }}
          >
            <img
              src="https://archive-media-1.nyafuu.org/w/image/1460/06/1460067150711.png"
              className="img-fluid col-xd-10"
              width={200}
              height={150}
              alt="Logo"
            />
          </div>
          <div className="col-xd-10 pl-5 pr-5 p-4 box-under">
            <h3 className="text-center ThongTin">Thông Tin Liên Hệ</h3>
            <div className="card-body">
              <div className="row no-gutters align-items-center p-3 m-2 box">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/600px-Facebook-icon-1.png"
                  alt=""
                  className="img-icon"
                ></img>
                <p className="Text-icon col ml-2 Text-fgp text-light">
                  Facebook:{" "}
                  <span className="span-text">https://www.facebook.com/</span>
                </p>
              </div>
              <div className="row no-gutters align-items-center p-3 m-2 box">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png"
                  alt=""
                  className="img-icon"
                ></img>
                <p className="Text-icon col ml-2 Text-fgp text-light">
                  Gmail:{" "}
                  <span className="span-text">Amadeus-Key@gmail.com</span>
                </p>
              </div>
              <div className="row no-gutters align-items-center p-3  m-2 box">
                <img
                  src="https://img.favpng.com/15/7/19/call-icon-phone-icon-telephone-icon-png-favpng-nPU5MiPqKftnfQK92YNYj85uP.jpg"
                  alt=""
                  className="img-icon"
                ></img>
                <p className="Text-icon col ml-2 Text-fgp text-light">
                  Hotline: <span className="span-text">19001001</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LienHe;
