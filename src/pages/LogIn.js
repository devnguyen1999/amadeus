import React, { useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { setUserSession } from "../Utils/Common";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

function LogIn(props) {
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { from } = { from: { pathname: "/" } };
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to={from} />;
  }

  const onSubmit = (values) => {
    setError(null);
    setLoading(true);
    axios
      .post("https://amadeuss.herokuapp.com/api/auth/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.accessToken, response.data.user);
        setRedirect(true);
        console.log(response.data.user)
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
      <Header />
      <div className="background">
        <img
          src="https://news.gearvn.com/wp-content/uploads/2019/12/Call-of-Duty-Modern-Warfare-Microtransactions.jpg"
          alt="Background"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-group">
        <input
          name="email"
          ref={register({
            required: "Email không được để trống",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Email không hợp lệ",
            },
          })}
          className="form-control"
          placeholder="Email đăng nhập"
          type="email"
        />
        {errors.email && (
          <>
            <span className="error">{errors.email.message}</span>
          </>
        )}

        <input
          name="password"
          ref={register({
            required: "Mật khẩu không được để trống",
            minLength: {
              value: 6,
              message: "Mật khẩu phải có ít nhất 6 kí tự",
            },
          })}
          type="password"
          className="form-control mt-4"
          placeholder="Mật khẩu"
        />
        {errors.password && (
          <>
            <span className="error">{errors.password.message}</span>
          </>
        )}

        <input
          type="submit"
          className="btn btn-primary mt-4 d-block"
          value={loading ? "Loading..." : "Đăng nhập"}
          disabled={loading}
        />
        {error && (
          <>
            <span className="error">{error}</span>
          </>
        )}
      </form>
    </div>
  );
}

export default LogIn;
