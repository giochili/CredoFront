import React, { useState, useEffect } from "react";
import getUserId from "../services/getUserId";

function RegisterApp() {
  const [billAmount, setBillAmount] = useState("");
  const [valute, setValute] = useState("");
  const [period, setPeriod] = useState("");
  const [dictionaryId, setDictionaryId] = useState("");
  const [userId, setUserId] = useState(0);
  const [statusId, setStatusId] = useState(1);
  const [token, setToken] = useState("");
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7185/api/GetDictionary/GetLoans")
      .then((response) => response.json())
      .then((json) => {
        setLoans(json);
        var ActiveUser = getUserId();
        setToken(localStorage.token);
        setUserId(ActiveUser);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerData = {
      billAmount,
      valute,
      period,
      dictionaryId,
      userId,
      statusId,
    };

    console.log("Sending data:", registerData);

    try {
      const response = await fetch(
        "https://localhost:7185/api/Auth/AddNewApp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token if needed
          },
          body: JSON.stringify(registerData),
        }
      );

      if (response.ok) {
        alert("Registration successful!");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h1>სესხის განაცხადი</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>თანხის ოდენობა</label>
          <input
            type="text"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>ვალუტა</label>
          <input
            type="text"
            value={valute}
            onChange={(e) => setValute(e.target.value)}
            required
          />
        </div>
        <div>
          <label>სესხის ხანგრძლივობა</label>
          <input
            type="text"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            required
          />
        </div>
        <div>
          <label>სესხის ტიპი</label>
          <select
            id="myCombo"
            value={dictionaryId}
            onChange={(e) => setDictionaryId(e.target.value)}
            required
          >
            <option value="">აირჩიეთ სესხის ტიპი</option>
            {loans.map((loan) => (
              <option key={loan.id} value={loan.descriptionId}>
                {loan.description}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterApp;
