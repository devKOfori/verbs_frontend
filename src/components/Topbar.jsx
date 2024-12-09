import React from "react";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import '../assets/styles/Topbar.css'

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar-content flex bg-white">
          <div className="btn login-btn">
            <span className="login-text"><Link to="/login" className="link-btn">login</Link></span>{" "}
            <span className="login-icon">
              <MdLogin />
            </span>
          </div>
          <div className="btn signup-btn">
            <span className="signup-text"><Link to="/register" className="link-btn">sign up</Link></span>{" "}
            <span className="signup-icon">
              <AiOutlineUserAdd />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
