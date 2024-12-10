import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import "../assets/styles/Register.css";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [acceptPolicy, setacceptPolicy] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    // this function validates the form data
    const errors = {};
    if (!data.firstname) {
        errors.firstname = "Firstname field cannot be empty."
    }
    if (!data.lastname) {
        errors.lastname = "Lastname field cannot be empty."
    }
    if (!data.email) {
        errors.email = "Email field cannot be empty."
    }
    if (!data.password) {
        errors.password = "Password field cannot be empty."
    }
    if (data.password !== data.confirmPassword) {       
      errors.confirmPassword = "Passwords do not match.";
    }

    if (!data.acceptPolicy) {
      errors.acceptPolicy = "Kindly accept the privacy policy to continue.";
    }
    return errors;
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      acceptPolicy,
    };
    // console.log(formData);
    const formErrors = validateForm(formData);
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
        console.log('send data to backend');
    }
  };
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
                  onChange={(e) => setFirstname(e.target.value)}
                />
                {errors.firstname && (
                <div className="error-message">
                  <MdErrorOutline />
                  {errors.firstname}
                </div>
              )}
              </div>
              <div className="form-group mb-2x">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last name"
                  required
                  onChange={(e) => setLastname(e.target.value)}
                />
                {errors.lastname && (
                <div className="error-message">
                  <MdErrorOutline />
                  {errors.lastname}
                </div>
              )}
              </div>
            </div>
            <div className="form-group mb-2x">
              <input
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
            <div className="row">
              <div className="form-group mb-2x">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group mb-2x">
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  required
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && (
                  <span className="error-message">
                    <MdErrorOutline />
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            </div>
            <div className="form-group mb-2x">
              <input
                type="checkbox"
                name="privacy_policy"
                id="privacy_policy"
                value="consent"
                required
                onChange={(e) => setacceptPolicy(e.target.checked)}
              />
              <label htmlFor="privacy_policy" className="privacy_policy">
                I have read and agreed to the{" "}
                <Link to="#" className="register-form-privacy-policy-link">
                  Privacy Policy.
                </Link>
              </label>
              {errors.acceptPolicy && (
                <div className="error-message">
                  <MdErrorOutline />
                  {errors.acceptPolicy}
                </div>
              )}
            </div>
            <div className="register-submit-btn">
              <button
                onClick={(e) => handleRegister(e)}
                className="btn register-form-btn mb-x"
                type="submit"
              >
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