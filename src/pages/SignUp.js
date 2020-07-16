import React, { useState, useRef } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useForm } from "react-hook-form";

function SignUp(props) {
  const { handleSubmit, register, errors, watch } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (values) => {
    setError(null);
    setLoading(true);
    axios
      .post("https://amadeuss.herokuapp.com/api/auth/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        setLoading(false);
        setError("Đăng kí thành công. Vui lòng kiểm tra email của bạn và xác thực tài khoản.");
        
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Có lỗi xảy ra. Vui lòng thử lại sau");
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
          name="username"
          ref={register({
            required: "Tên người dùng không được để trống",
            minLength: {
              value: 6,
              message: "Tên người dùng phải có ít nhất 6 kí tự",
            },
          })}
          className="form-control"
          placeholder="Tên người dùng"
          type="text"
        />
        {errors.email && (
          <>
            <span className="error">{errors.email.message}</span>
          </>
        )}
        <input
          name="email"
          ref={register({
            required: "Email không được để trống",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Email không hợp lệ",
            },
          })}
          className="form-control mt-4"
          placeholder="Email đăng kí"
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
          name="password_repeat"
          ref={register({
            validate: (value) =>
              value === password.current || "Nhập lại mật khẩu không khớp",
          })}
          type="password"
          className="form-control mt-4"
          placeholder="Nhập lại mật khẩu"
        />
        {errors.password_repeat && (
          <>
            <span className="error">{errors.password_repeat.message}</span>
          </>
        )}

        <input
          type="submit"
          className="btn btn-primary mt-4 d-block"
          value={loading ? "Loading..." : "Đăng kí"}
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

export default SignUp;
