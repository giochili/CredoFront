import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Login({ onLogin }) {
  const [userFirstName, setUserFirstName] = useState("");
  const [userPersonalId, setUserPersonalId] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handlecheck = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7185/api/Auth/GetUsers",
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );

      console.log(response.data);
    } catch (err) {
      setError("Request failed: " + err.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      userFirstName,
      userPersonalId,
    };
    try {
      const response = await fetch("https://localhost:7185/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      onLogin(data.token);
      navigate("/");
    } catch (err) {
      setError("Login failed: " + err.message);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={userFirstName}
            onChange={(e) => setUserFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Personal ID:</label>
          <input
            type="text"
            value={userPersonalId}
            onChange={(e) => setUserPersonalId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>

        <button onClick={handlecheck}>check</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
