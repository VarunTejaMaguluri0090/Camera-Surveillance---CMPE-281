import React, { useState, useEffect } from "react";
import axios from "axios";

function DataManagement() {
  const [locations, setLocations] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [cameraId, setCameraId] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      const response = await axios.get("http://localhost:3002/maintainancePage");
      setLocations(response.data.buildingNames);
    }
    fetchLocations();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:3002/raisemaintainanceRequests", {
        params: {
          startDate: startDate,
          endDate: endDate,
          cameraId: cameraId,
          buildingName: buildingName,
        },
      })
      .then((response) => setData(response.data.videoData))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <div>
          <h4>Raise Maintenance Request</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Please select the start date:</label>
            <input
              type="date"
              name="startDate"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </div>
          <div>
            <label>Please select the end date:</label>
            <input
              type="date"
              name="endDate"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </div>
          <div>
            <label>Please enter the Camera ID you want feed from</label>
            <input
              type="text"
              name="description"
              placeholder="Type in Camera ID"
              value={cameraId}
              onChange={(event) => setCameraId(event.target.value)}
            />
          </div>
          <div>
            <label>Please select the Building Name</label>
            <select
              name="location"
              value={buildingName}
              onChange={(event) => setBuildingName(event.target.value)}
            >
              <option value="">Select Building Name</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Camera ID</th>
              <th>Building ID</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Date</th>
              <th>Video</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.cameraId}>
                <td>{item.cameraId}</td>
                <td>{item.buildingId}</td>
                <td>{item.startTime}</td>
                <td>{item.endTime}</td>
                <td>{item.date}</td>
                <td>{item.videoLink}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DataManagement;
