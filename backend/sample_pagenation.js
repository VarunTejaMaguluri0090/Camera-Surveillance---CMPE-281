import React, { useState } from "react";

function CameraAlerts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [alertsPerPage] = useState(10); // Change this value to adjust the number of alerts per page
  const [alerts, setAlerts] = useState([...]); // Change this to your array of alerts

  // Get the index of the last alert on the current page
  const indexOfLastAlert = currentPage * alertsPerPage;

  // Get the index of the first alert on the current page
  const indexOfFirstAlert = indexOfLastAlert - alertsPerPage;

  // Get the alerts for the current page
  const currentAlerts = alerts.slice(indexOfFirstAlert, indexOfLastAlert);

  // Loop through the current alerts and render them
  const renderedAlerts = currentAlerts.map(alert => (
    <div key={alert.AlertID}>
      <p>Camera Name: {alert.CameraName}</p>
      <p>Alert Type: {alert.AlertType}</p>
      <p>Time/Date: {alert.TimeDate}</p>
      <p>Alert Level: {alert.AlertLevel}</p>
      {/* Add more details as needed */}
    </div>
  ));

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(alerts.length / alertsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Render the page numbers
  const renderedPageNumbers = pageNumbers.map(number => (
    <li key={number}>
      <a href="#" onClick={() => setCurrentPage(number)}>
        {number}
      </a>
    </li>
  ));

  return (
    <div>
      {renderedAlerts}
      <ul>
        {renderedPageNumbers}
      </ul>
    </div>
  );
}

export default CameraAlerts;
