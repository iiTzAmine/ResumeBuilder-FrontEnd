import React from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";

function NavbarAuth() {
  return (
    <div className="__nav-bar | container-fluid d-flex justify-content-between align-items-center">
      {/* <h1 className="logo me-auto me-lg-0"><Link to={'/'}>Logo</Link></h1> */}
      <div className=" | flex h-100 justify-center align-items-center ml-40">
        <Link
          to={"/"}
          className="__logo_container | h-auto flex justify-center align-center"
        >
          <svg
            className="__logo_auth | rounded-lg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ff7900"
              d="M0 0h24v24H0zm3.43 20.572h17.143v-3.429H3.43z"
            />
          </svg>
        </Link>
      </div>
      <div className="_flex __auth_container">
        <Link to={"/register"} className="__auth_btn">
          Register
        </Link>
        <Link to={"/login"} className="__auth_btn">
          Login
        </Link>
      </div>
    </div>
  );
}

export default NavbarAuth;
