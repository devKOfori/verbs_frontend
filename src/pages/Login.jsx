import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Login.css";
import FormButton from "../components/FormButton";
import { MdErrorOutline } from "react-icons/md";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validateLoginForm = (data) => {
    const errors = {};
    if (!data.email) {
      errors.email = "Enter your email address to login.";
    }
    if (!data.password) {
      errors.password = "Enter your password to login.";
    }
    return errors;
  };

  const loginAccount = async () => {
    const loginURL = "http://localhost:8000/api/token/";
    const payload = {
      email,
      password,
    };
    try {
      const response = await fetch(loginURL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Unable to login ${response.data}`)
      }
    } catch (error) {}
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginFormData = {
      email,
      password,
    };
    const loginFormErrors = validateLoginForm(loginFormData);
    setErrors(loginFormErrors);
    if (Object.keys(loginFormErrors).length === 0) {
      console.log("sign in successful...");
    }
  };
  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="login-form-header mb-2x">
          <h1 className="h1">Sign in</h1>
        </div>
        <div className="login-form-content">
          <form method="post">
            <div className="form-group mb-2x">
              <input
                className="login-form-input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <div className="error-message">
                  <MdErrorOutline />
                  {errors.email}
                </div>
              )}
            </div>
            <div className="form-group mb-2x">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <div className="error-message">
                  <MdErrorOutline />
                  {errors.password}
                </div>
              )}
            </div>
            <div className="login-submit-btn">
              <FormButton
                btnClass={"btn login-form-btn mb-x"}
                btnText={"Sign in"}
                btnType={"submit"}
                handleClick={handleLogin}
              />
              {/* <button
                onClick={(e) => handleLogin(e)}
                className="btn login-form-btn mb-x"
                type="submit"
              >
                Sign in
              </button> */}
            </div>
          </form>
        </div>
        <div className="login-form-links flex">
          <div className="form-link reset-password">
            Forgotten Password?
            <Link
              to="register.html"
              className="login-form__reset-password-link"
            >
              Reset
            </Link>
          </div>
          <div className="form-link login-form-register-text">
            Don't have an account?
            <Link to="/register" className="login-form__register-link">
              Register
            </Link>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Login;
