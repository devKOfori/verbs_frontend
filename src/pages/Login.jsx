import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/Login.css";
import FormButton from "../components/FormButton";
import APIErrors from "../components/APIErrors";
import { MdErrorOutline } from "react-icons/md";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // set form frontend validation errors state variable
  const [errors, setErrors] = useState({});
  //   set api errors state variable
  const [apiErrors, setApiErrors] = useState([]);

  // set spinner state variable for when registration POST request
  const [loading, setLoading] = useState(false);

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

  const navigate = useNavigate();

  const loginAccount = async () => {
    const loginURL = "http://localhost:8000/api/token/";
    const payload = {
      email,
      password,
    };
    try {
      setLoading(true);
      const response = await fetch(loginURL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        setApiErrors(Object.values(errorData));
        throw new Error(`Unable to login ${response.status}`);
      } else {
        const data = await response.json();
        console.log(data);
        setApiErrors([]);
        toast.success("Login successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return navigate("/products");
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
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
      loginAccount();
      console.log("sign in successful...");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="login-form-header mb-2x">
          <h1 className="h1">Sign in</h1>
        </div>
        {apiErrors.length > 0 && <APIErrors apiErrors={apiErrors} />}
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
                loading={loading}
              />
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
