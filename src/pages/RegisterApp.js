import React, { useState } from "react";
import getUserId from "../services/getUserId";

function RegisterApp() {
  const [billAmount, setBillAmount] = useState("");
  const [valute, setValute] = useState("");
  const [period, setPeriod] = useState("");
  const [dictionaryId, setDictionaryId] = useState(0);
  const [userId, setUserId] = useState(0);
  const [statusId, setStatusId] = useState(0);
  const [token, setToken] = useState("");

  var ActiveToken = getUserId();
  if (!token) {
    setToken(ActiveToken);
  }

  const handleSubmit = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h1> სესხის განაცხადი</h1>
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
            type="number"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            required
          />
        </div>
        <div>
          <label>სესხის ტიპი</label>
          <select id="myCombo">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <div>
          <label>სტატუსი</label>
          <input
            type="text"
            value={statusId}
            onChange={(e) => setStatusId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterApp;
