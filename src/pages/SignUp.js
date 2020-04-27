import React from "react";
import PropTypes from "prop-types";

SignUp.propTypes = {};

function SignUp(props) {
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
          placeholder="Email đăng kí"
        />
        <input
          type="password"
          className="form-control mt-4"
          name
          id
          placeholder="Mật khẩu"
        />
        <input
          type="password"
          className="form-control mt-4"
          name
          id
          placeholder="Nhập lại mật khẩu"
        />
        <button type="submit" className="btn btn-primary mt-4">
          Đăng kí
        </button>
      </div>
    </div>
  );
}

export default SignUp;