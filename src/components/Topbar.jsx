import React from "react";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import '../assets/styles/Topbar.css'
import { IoPersonOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart } from "react-icons/bs";

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar-content flex bg-white">
          {/* <div className="btn login-btn">
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
          </div> */}
          <div className="topbar-icon user-icon">
          <Link to="/login" className="link-btn"><IoPersonOutline/></Link>
          </div>
          <div className="topbar-icon favorites-icon">
          <Link to="/" className="link-btn"><MdFavoriteBorder /></Link>
          </div>
          <div className="topbar-icon cart-icon">
            <Link to="/" className="link-btn"><BsCart /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
