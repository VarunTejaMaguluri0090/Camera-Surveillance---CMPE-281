import './reportPage.css';
import SideBar from '../../components/sideBar/SideBar';
import React, { useState, useEffect } from "react";
import axios from "axios";

const ReportPage = () => {

  const [systemMetrics, setSystemMetrics] = useState({});
  const [cameraHealth, setCameraHealth] = useState([]);
  const [incidentReports, setIncidentReports] = useState([]);
  const [userActivityLogs, setUserActivityLogs] = useState([]);
  const [auditTrails, setAuditTrails] = useState([]);
  const [analytics, setAnalytics] = useState([]);
  const [graphs, setGraphs] = useState([]);
  const [configSettings, setConfigSettings] = useState([]);
  


  useEffect(() => {

    const fetchSystemMetrics = async () => {
      try {
        const res = await axios.get("/api/systemMetrics");
        setSystemMetrics(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCameraHealth = async () => {
      try {
        const res = await axios.get("/api/cameraHealth");
        setCameraHealth(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchIncidentReports = async () => {
      try {
        const res = await axios.get("/api/incidentReports");
        setIncidentReports(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchUserActivityLogs = async () => {
      try {
        const res = await axios.get("/api/userActivityLogs");
        setUserActivityLogs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSystemMetrics();
    fetchCameraHealth();
    fetchIncidentReports();
    fetchUserActivityLogs();


    axios
    .get('/api/system-metrics')
    .then((response) => setSystemMetrics(response.data))
    .catch((error) => console.log(error));

  axios
    .get('/api/camera-status')
    .then((response) => setCameraStatus(response.data))
    .catch((error) => console.log(error));

  axios
    .get('/api/incident-reports')
    .then((response) => setIncidentReports(response.data))
    .catch((error) => console.log(error));

  axios
    .get('/api/user-activity-logs')
    .then((response) => setUserActivityLogs(response.data))
    .catch((error) => console.log(error));

  axios
    .get('/api/audit-trails')
    .then((response) => setAuditTrails(response.data))
    .catch((error) => console.log(error));

  axios
    .get('/api/analytics')
    .then((response) => setAnalytics(response.data))
    .catch((error) => console.log(error));

  axios
    .get('/api/graphs')
    .then((response) => setGraphs(response.data))
    .catch((error) => console.log(error));


  }, []);


//export default function ReportPage() {
  return (
    <>
    <SideBar/>

    <div className="report-container">
      <h1 className="heading-main">Surveillance System Report</h1>
      <div className="section">
        <h2 className="heading-main">System Performance Metrics</h2>
        <p>Uptime: {systemMetrics.uptime}</p>
        <p>Downtime: {systemMetrics.downtime}</p>
        <p>Response Time: {systemMetrics.responseTime}</p>
        {/* Other performance metrics can be displayed here */}
      </div>
      <div className="section">
        <h2 className="heading-main">Camera Health Status</h2>
        {cameraHealth.map((camera) => (
          <div key={camera.id}>
            <p>Name: {camera.name}</p>
            <p>ID: {camera.id}</p>
            <p>Location: {camera.location}</p>
            <p>Status: {camera.status}</p>
            {/* Other camera health details can be displayed here */}
          </div>
        ))}
      </div>
      <div className="section">
        <h2 className="heading-main">Incident Reports</h2>
        {incidentReports.map((report) => (
          <div key={report.id}>
            <p>Date: {report.date}</p>
            <p>Time: {report.time}</p>
            <p>Camera Location: {report.cameraLocation}</p>
            <p>Type of Incident: {report.incidentType}</p>
            <p>Severity Level: {report.severity}</p>
            {/* Other incident report details can be displayed here */}
          </div>
        ))}
      </div>
      <div className="section">
        <h2 className="heading-main">User Activity Logs</h2>
        {userActivityLogs.map((log) => (
          <div key={log.id}>
            <p>User: {log.user}</p>
            <p>Action: {log.action}</p>
            <p>Date: {log.date}</p>
            <p>Time: {log.time}</p>
            {/* Other user activity log details can be displayed here */}
          </div>
           ))}
  
  <h1 className="heading-main">Audit Trails</h1>
  <div className="audit-trails">
    {auditTrails.map((trail) => (
      <div key={trail.id}>
        <p>User: {trail.user}</p>
        <p>Action: {trail.action}</p>
        <p>Time: {trail.time}</p>
      </div>
    ))}
  </div>

  <div className="section">
  <h2 className="heading-main">Analytics and Insights</h2>
  <ul>
    {analytics.map((insight) => (
      <li key={insight.id}>
        <div className="insight-info">
          <div>{insight.type}</div>
          <div>{insight.data}</div>
        </div>
      </li>
    ))}
  </ul>
</div>


<div className="section">
  <h2 className="heading-main">Graphs and Charts</h2>
  <ul>
    {graphs.map((chart) => (
      <li key={chart.id}>
        <div className="chart-info">
          <div>{chart.type}</div>
          <div>{chart.data}</div>
        </div>
      </li>
    ))}
  </ul>
</div>
<div className="section">
  <h2 className="heading-main">Configuration Settings</h2>
  <ul>
    {configSettings.map((setting) => (
      <li key={setting.id}>
        <div className="setting-info">
          <div>{setting.name}</div>
          <div>{setting.value}</div>
        </div>
      </li>
    ))}
  </ul>
</div>
</div>
</div>
</>
)}
