import React from "react";
import "./LogIn.css";
function LogIn(props) {
  return (
    <div>
      <div className="background">
        <img
          src="https://news.gearvn.com/wp-content/uploads/2019/12/Call-of-Duty-Modern-Warfare-Microtransactions.jpg"
          alt="Background"
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
