import React, { useState, useEffect } from "react";

export default function DataComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures the fetch only runs once

  var s = JSON.stringify(data);
  var json = JSON.parse(s);

  return (
    <div className="DataComponent">
      <h2>All Missions</h2>
      <table>
        <tr>
          <th>Mission</th>
          <th>Company</th>
          <th>Location</th>
          <th>Date</th>
          <th>Time</th>
          <th>Rocket</th>
          <th>Price</th>
          <th>Successful</th>
        </tr>
        {json.map((item) => (
          <tr key={item.mission}>
            <td>{item.mission}</td>
            <td>{item.company}</td>
            <td>
              {item.location.split(", ")[item.location.split(", ").length - 1]}
            </td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.rocket}</td>
            <td>{item.price}</td>
            <td>{item.successful.toString()}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
