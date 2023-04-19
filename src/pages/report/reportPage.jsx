import React from "react";
import "./reportPage.css";
import SideBar from "../../components/sideBar/SideBar";

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

  return (
    <>
    <SideBar />
    <div className="report-page">
      <div className="metric-column">
        
        <h2>System performance metrics</h2>
        <p>Uptime: {systemMetrics.uptime}</p>
        <p>Downtime: {systemMetrics.downtime}</p>
        <p>Response Time: {systemMetrics.responseTime}</p>
        <p>Other Metrics: {systemMetrics.otherMetrics}</p>
      </div>
      <div className="metric-column">
        <h2>Camera health status</h2>
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


    <div className="incident-reports">
        <h2>Incident Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Date/Time</th>
              <th>Camera Location</th>
              <th>Type</th>
              <th>Severity</th>
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

      <div className="user-activity-logs">
        <h2>User Activity Logs</h2>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Action</th>
              <th>Date/Time</th>
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
        <h2>Analytics and Insights</h2>
        <p>This section includes advanced analytics and insights into the surveillance system's performance and usage, such as heat maps, motion detection, and facial recognition data.</p>
      </div>
      <div className="section">
        <h2>Graphs and Charts</h2>
        <p>This section displays visual representations of data related to the surveillance system's performance and usage, such as uptime charts, incident frequency graphs, and camera usage charts.</p>
      </div>
      <div className="section">
        <h2>Configuration Settings</h2>
        <p>This section allows administrators to adjust the settings of the surveillance system, such as camera recording times, motion detection sensitivity, and access control permissions.</p>
      </div>





     


































    <div>
      <h2>User Activity Logs</h2>
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