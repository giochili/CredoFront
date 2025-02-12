import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import React, { useState, useEffect } from "react";
import SignUp from "./pages/SignUp";
import RegisterApp from "./pages/RegisterApp";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const handleLogin = (jwtToken) => {
    setToken(jwtToken);
    localStorage.setItem("token", jwtToken);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/Login" element={<Login onLogin={handleLogin} />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/RegisterApp" element={<RegisterApp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
