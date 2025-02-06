import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login";
import React, { useState, useEffect } from "react";
import SignUp from "./pages/SignUp";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const handleLogin = (jwtToken) => {
    setToken(jwtToken);
    localStorage.setItem("token", jwtToken); // Optional: Store in localStorage or sessionStorage
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/Login" element={<Login onLogin={handleLogin} />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
