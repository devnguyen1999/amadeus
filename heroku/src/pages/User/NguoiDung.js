import React from "react";

import $ from "jquery";
import DieuHuong from "./DieuHuong.js";
import Footer from "../../components/Footer.js";
import { getUser } from "../../Utils/Common";
import Header from "../../components/Header";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { HienThi: 1, UserData: getUser() };
  }

  componentDidMount = () => {
    $("#1").on("click", function () {
      $("#1").css("background", "#D63031");
      $("#2").css("background", "rgba(255, 255, 255, 0.1)");
    });

    $("#2").on("click", function () {
      $("#2").css("background", "#D63031");
      $("#1").css("background", "rgba(255, 255, 255, 0.1)");
    });
  };

  render() {
    return (
      <div>
          <Header/>
        <div
          className="container-fluid p-2"
          style={{
            backgroundColor: "black",
          }}
        >
          {/*Avata and name user */}
          <div className="jumbotron hinhnen p-0">
            <div
              className="container-fluid d-flex align-items-center justify-content-center flex-column"
              style={{
                height: "100%",
                backgroundColor: "rgba(60, 60, 60, 0.5)",
              }}
            >
              <img
                src="https://static.zerochan.net/Rory.Mercury.full.2834327.jpg"
                alt=""
                className="img-fluid rounded-circle p-0"
                width="120"
                height="100"
              />
              <p className="text-light text-name mt-3">
                {this.state.UserData.username}
              </p>
              <p className="text-light text-name">
                ({this.state.UserData.nickname})
              </p>
            </div>
          </div>
          {/*Button*/}
          <div className="container mb-3 ">
            <div
              className="jumbotron row p-4 row d-flex justify-content-center  "
              style={{ background: "black" }}
            >
              <button
                className="btn col-xl-3 col-lg-3 col-md-3 col-3 col-sm-3 mr-2 mb-2 text-white"
                id="1"
                onClick={() => this.setState({ HienThi: 1 })}
                style={{ background: "#D63031" }}
              >
                Thông tin cá nhân
              </button>
              <button
                className="btn col-xl-3 col-lg-3 col-md-3 col-4 col-sm-4 mr-2  mb-2  text-white"
                id="2"
                onClick={() => this.setState({ HienThi: 2 })}
                style={{ background: "rgba(255, 255, 255, 0.1)" }}
              >
                Lịch sử giao dịch
              </button>
            </div>
          </div>

          {/*Button  */}

          <div className="container">
            <DieuHuong HT={this.state.HienThi} UserData={this.state.UserData} />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
