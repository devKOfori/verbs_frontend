import React from "react";
import { CiLogin } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";
import '../assets/styles/Topbar.css'

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar-content flex bg-white">
          <div className="btn login-btn">
            <span className="login-text">login</span>{" "}
            <span className="login-icon">
              <CiLogin />
            </span>
          </div>
          <div className="btn signup-btn">
            <span className="signup-text">sign up</span>{" "}
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
