import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Register.css"
const Register = () => {
  return (
    <div className="register-page">
      <div className="nav-section"></div>
      <div className="register-form-container">
        <div className="register-form-header m-3x">
          <h1 className="h1 mb-2x">Create your account</h1>
        </div>
        <div className="register-form-content">
          <form method="post">
            <div className="row">
              <div className="form-group mb-2x">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="form-group mb-2x">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div className="form-group mb-2x">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="row">
              <div className="form-group mb-2x">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-group mb-2x">
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
            <div className="form-group mb-2x">
              <input
                type="checkbox"
                name="privacy_policy"
                id="privacy_policy"
                value="consent"
              />
              <label for="privacy_policy" className="privacy_policy">
                I have read and agreed to the{" "}
                <Link to="#" className="register-form-privacy-policy-link">
                  Privacy Policy.
                </Link>
              </label>
            </div>
            <div className="register-submit-btn">
              <button className="btn register-form-btn mb-x" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="register-form-links">
          <div className="form-link reset-password">
            Already have an account?
            <Link to="/login" className="register-form__login-link">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
