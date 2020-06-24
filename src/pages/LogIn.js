import "./LogIn.css";
import React, { useState } from "react";
import axios from "axios";
import { setUserSession, getUser } from "../Utils/Common";
import { useHistory, Redirect } from "react-router-dom";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput();
  const password = useFormInput();
  const [error, setError] = useState(null);
  const history = useHistory();

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("https://amadeuss.herokuapp.com/api/auth/login", {
        email: email.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.accessToken, response.data.user);
        history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

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
          {...email}
          className="form-control"
          placeholder="Email đăng nhập"
        />
        <input
          type="password"
          {...password}
          className="form-control mt-4"
          placeholder="Mật khẩu"
        />
        <input
          type="button"
          className="btn btn-primary mt-4 mb-3 d-block"
          value={loading ? "Loading..." : "Đăng nhập"}
          onClick={handleLogin}
          disabled={loading}
        />
        {error && (
          <>
            <span className="error">{error}</span>
          </>
        )}
      </div>
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
