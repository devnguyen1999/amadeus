import "./LogIn.css";
import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';
function LogIn(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/dashboard');
  }
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
        <button type="submit" className="btn btn-primary mt-4 d-block">
          Đăng nhập
        </button>
      </div>
    </div>
  );
}
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
export default LogIn;
