import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { Link } from "react-router";
import SignUp from "../pages/SignUp";
import RegisterApp from "../pages/RegisterApp";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/SignUp">
          <button>SignUp</button>
        </Link>
        <Link to="/RegisterApp">
          <button>+</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
