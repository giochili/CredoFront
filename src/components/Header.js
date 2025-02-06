import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { Link } from "react-router";
import SignUp from "../pages/SignUp";

const Header = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white p-4 text-center text-xl">
        My Website Header
      </header>
      <nav>
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/SignUp">
          <button>SignUp</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
