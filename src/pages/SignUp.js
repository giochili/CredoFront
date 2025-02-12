import React, { useState } from "react";
import { useNavigate } from "react-router";

function SignUp() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPersonalId, setUserPersonalId] = useState("");
  const [userDbirth, setUserDbirth] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      userFirstName,
      userLastName,
      userPersonalId,
      userDbirth,
    };

    try {
      const response = await fetch(
        "https://localhost:7185/api/AddUser/CreateUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to register user.");
      }

      const data = await response.json();
      setError(""); // Clear error on success
      navigate("/");
    } catch (err) {
      setError("Registration failed: " + err.message);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={userFirstName}
            onChange={(e) => setUserFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Personal ID</label>
          <input
            type="number"
            value={userPersonalId}
            onChange={(e) => setUserPersonalId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            value={userDbirth}
            onChange={(e) => setUserDbirth(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
