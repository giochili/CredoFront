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
    <main className="p-6 text-center">
      <h1 className="text-2xl font-bold">Welcome to My Website</h1>
      {/* Render Table Instead of List */}
      {applications.length > 0 ? (
        <table className="table-auto border-collapse border border-gray-300 mx-auto mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Valute</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{app.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {app.valute}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No applications found.</p>
      )}

      <p className="text-gray-600 mt-2">This is the body content.</p>
    </main>
  );
};

export default Body;
