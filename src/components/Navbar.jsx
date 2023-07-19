import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let userData = localStorage.getItem("user")
  if (userData == null) {
    localStorage.setItem("user","[]")
  }
  return (
    <nav class="d-flex pt-3 pb-3 ps-5 pe-5 bg-light text-dark align-items-center justify-content-between">
      <div class="gmail">
        <h3 className="m-0 text-danger fs-1">Gmail</h3>
      </div>
      <div className="d-flex w-25 justify-content-evenly">
        <Link to="signup" className="fs-3 text-warning text-decoration-none">
          Signup
        </Link>
        <Link to="login" className="fs-3 text-info text-decoration-none">
          Signin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
