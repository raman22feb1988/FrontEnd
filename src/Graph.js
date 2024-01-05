import React, { useState, useEffect } from "react";

export default function Graph() {
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
    <div>
      <h2>Prices Of Recent Missions</h2>
      {json.slice(0, 10).map((item) => (
        <div
          className="Graph"
          style={{ width: String(item.price / 250000) + "%" }}
        >
          <p>
            {item.mission} (${item.price})
          </p>
        </div>
      ))}
    </div>
  );
}
