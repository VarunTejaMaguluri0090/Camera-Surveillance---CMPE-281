import React from "react";
import "./reportPage.css";
import SideBar from "../../components/sideBar/SideBar";
//import InfiniteScroll from 'react-infinite-scroll-component'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from "react";

const ReportPage = () => {
  const systemMetrics = {
    uptime: "99.5%",
    downtime: "0.5%",
    responseTime: "250ms",
    otherMetrics: "..."
  };

  const cameraHealth = [
    {
      name: "Camera 1",
      id: "12345",
      location: "Main Entrance",
      status: "Online",
      details: "..."
    },
    {
      name: "Camera 2",
      id: "67890",
      location: "Parking Lot",
      status: "Offline",
      details: "..."
    },
    // more cameras here...
  ];

  const incidentReports = [
    {
      time: "2022-03-15 12:30:00",
      location: "Main Entrance",
      type: "Intrusion",
      severity: "High",
      details: "..."
    },
    {
      time: "2022-03-18 08:15:00",
      location: "Back Door",
      type: "Unauthorized Access",
      severity: "Medium",
      details: "..."
    },
    // more incidents here...
  ];

  const userActivityLogs = [
    {
      user: "John Doe",
      action: "Logged in",
      time: "2022-03-15 12:00:00",
      details: "..."
    },
    {
      user: "Jane Smith",
      action: "Viewed live feed",
      time: "2022-03-18 08:00:00",
      details: "..."
    },
    // more user activity logs here...
  ];

  const analyticsAndInsights = {
    heatMaps: "coming soon...",
    motionDetection: "coming soon...",
    facialRecognition: "coming soon...",
    otherAnalytics: "..."
  };

  const graphsAndCharts = {
    uptimeChart: "coming soon...",
    incidentFrequencyGraph: "coming soon...",
    cameraUsageChart: "coming soon...",
    otherCharts: "..."
  };

  const configurationSettings = {
    recordingTimes: "coming soon...",
    motionDetectionSensitivity: "coming soon...",
    accessControlPermissions: "coming soon...",
    otherSettings: "..."
  };


  const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [alertsPerPage] = useState(5); // Change this value to adjust the number of alerts per page
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    
    async function handleDateRangeChange(start, end) {
        setStartDate(start);
        setEndDate(end);
        // axios.get(`http://127.0.0.1:3002/alerts?startDate=${new Date(startDate).toISOString()}&endDate=${new Date(endDate).toISOString()}`)
        // .then(response => response.json())
        // .then(data => setData(data))
        // .catch(error => console.error(error));
      }
    

      function DateRangePicker({ onChange }) {
        // const [startDate, setStartDate] = useState(null);
        // const [endDate, setEndDate] = useState(null);
      
        function handleStartDateChange(date) {
          setStartDate(date);
          if (endDate && date < endDate) {
            onChange(date, endDate);
          }
        }
      
        function handleEndDateChange(date) {
          setEndDate(date);
          if (startDate && date > startDate) {
            onChange(startDate, date);
          }
        }
      
        return (
         
          <div class="date">
          <div>
            <label class="date_correction">Start Date:</label>
            <input type="date" value={startDate} onChange={e => handleStartDateChange(e.target.value)} class="field_correction"/>
            <label class="date_correction">End Date:</label>
            <input type="date" value={endDate} onChange={e => handleEndDateChange(e.target.value)} class="field_correction"/>
          </div>
          </div>
        );
      }



  return (
    <>
    
    {/* <SideBar /> */}
   
    <div className="report-page">
    <h1 className="heading-main">Overall Report Analysis</h1>
    <DateRangePicker onChange={handleDateRangeChange} />
     {/*  <h1>Infinite Scroll</h1> */}
      <div className="metric-column">
        
        <h2 className="heading-sub">System performance metrics</h2>
        <p>Uptime: {systemMetrics.uptime}</p>
        <p>Downtime: {systemMetrics.downtime}</p>
        <p>Response Time: {systemMetrics.responseTime}</p>
        <p>Other Metrics: {systemMetrics.otherMetrics}</p>
      </div>
      <div className="metric-column">
        <h2 className="heading-sub">Camera health status</h2>
        {cameraHealth.map((camera) => (
          <div key={camera.id}>
            <p>Name: {camera.name}</p>
            <p>ID: {camera.id}</p>
            <p>Location: {camera.location}</p>
            <p>Status: {camera.status}</p>
            <p>Details: {camera.details}</p>
            
          </div>
        ))}
      </div>

      <div className="metric-column">
    <div className="incident-reports">
        <h2 className="heading-sub">Incident Reports</h2>
        <table>
          <thead>
            <tr>
              <th className="heading-color">Date/Time</th>
              <th className="heading-color">Camera Location</th>
              <th className="heading-color">Type</th>
              <th className="heading-color">Severity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022-01-01 12:00:00</td>
              <td>Entrance</td>
              <td>Theft</td>
              <td>High</td>
            </tr>
            <tr>
              <td>2022-01-02 08:30:00</td>
              <td>Parking Lot</td>
              <td>Vandalism</td>
              <td>Medium</td>
            </tr>

            <tr>
              <td>2023-04-10 14:32:12</td>
              <td>Entrance</td>
              <td>Intruder</td>
              <td>High</td>
            </tr>
            <tr>
              <td>2023-04-09 18:12:45</td>
              <td>Stairwell</td>
              <td>Fire</td>
              <td>Medium</td>
            </tr>
        

            {/* more incident reports */}
          </tbody>
        </table>
      </div>

      <div className="user-activity-logs" >
        <h2 className="heading-sub">User Activity Logs</h2>
        <table>
          <thead>
            <tr>
              <th className="heading-color">User</th>
              <th className="heading-color">Action</th>
              <th className="heading-color">Date/Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Viewed Camera 1</td>
              <td>2022-01-01 12:00:00</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>Changed Camera 2 Settings</td>
              <td>2022-01-02 08:30:00</td>
            </tr>
            {/* more user activity logs */}
          </tbody>
        </table>
      </div>




      <div className="section">
        <h2 className="heading-sub">Analytics and Insights</h2>
        <p>This section includes advanced analytics and insights into the surveillance system's performance and usage, such as heat maps, motion detection, and facial recognition data.</p>
      </div>
      <div className="section">
        <h2 className="heading-sub">Graphs and Charts</h2>
        <p>This section displays visual representations of data related to the surveillance system's performance and usage, such as uptime charts, incident frequency graphs, and camera usage charts.</p>
      </div>
      <div className="section">
        <h2 className="heading-sub">Configuration Settings</h2>
        <p>This section allows administrators to adjust the settings of the surveillance system, such as camera recording times, motion detection sensitivity, and access control permissions.</p>
      </div>


    <div>
      <h2 className="heading-sub">User Activity Logs</h2>
      <div className="user-activity-logs-container">
        <div className="user-activity-log">
          <p>User:</p>
          <p>Action:</p>
          <p>Time and date:</p>
        </div>
        <div className="user-activity-log">
          <p>User:</p>
          <p>Action:</p>
          <p>Time and date:</p>
        </div>
        <div className="user-activity-log">
          <p>User:</p>
          <p>Action:</p>
          <p>Time and date:</p>
        </div>
        {/* add more user activity logs */}
      </div>
    </div>

      </div>
      </div>
      </>
       )}








      {/* <div className="metric-column">
        <h2>Incident reports</h2>
        {incidentReports.map((incident) => (
          <div key={incident.time}>
            <p>Time: {incident.time}</p>
            <p>Location: {incident.location}</p>
            <p>Type */}


export default ReportPage