import React from "react";
import PropTypes from "prop-types";
import "./LogIn.css";

LogIn.propTypes = {};

function LogIn(props) {
  return (
    <div>
      <div className="background">
        <img
          src="https://news.gearvn.com/wp-content/uploads/2019/12/Call-of-Duty-Modern-Warfare-Microtransactions.jpg"
          alt
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          name
          id
          aria-describedby="emailHelpId"
          placeholder="Email đăng nhập"
        />
        <input
          type="password"
          className="form-control mt-4"
          name
          id
          placeholder="Mật khẩu"
        />
        <button type="submit" className="btn btn-primary mt-4">
          Đăng nhập
        </button>
      </div>
    </div>
  );
}

export default LogIn;
