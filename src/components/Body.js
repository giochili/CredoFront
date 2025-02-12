import React, { useState, useEffect } from "react";
import getRoleId from "../services/decoded";
import getUserId from "../services/getUserId";

const Body = () => {
  const roleId = getRoleId();
  const [applications, setApplications] = useState([]);
  const [response, setResponse] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    const roleId = getRoleId();
    const userId = getUserId();

    fetch(
      `https://localhost:7185/api/Auth/GetAplications?roleId=${roleId}&userId=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
      }
    )
      .then(async (response) => {
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          throw new Error(`Response is not JSON: ${contentType}`);
        }

        return response.json();
      })
      .then((data) => {
        // Extract `applications` array or set it to an empty array if missing
        const apps = Array.isArray(data.applications) ? data.applications : [];
        setApplications(apps);
        setData(data);
        setResponse("Success");
      })
      .catch((error) => console.error("Error fetching applications:", error));
  }, []);

  return (
    <main>
      <h1>Welcome to My Website</h1>
      {/* Render Table Instead of List */}
      {applications.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Valute</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.valute}</td>
                <td>{app.billAmount}</td>
                <td>{app.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No applications found.</p>
      )}
    </main>
  );
};

export default Body;
