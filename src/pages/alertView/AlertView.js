import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './alertView.css'

const SingleAlertView = ({ alertId }) => {
  const [alert, setAlert] = useState(null);

  function handleResolve(){
    console.log("@@### handle resolve");
    // Send request to server to mark alert as resolved
    // fetch(`/alerts/${alert.id}/resolve`, {
    //   method: 'PUT',
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Update alert state with resolved alert
    //     setAlert(data);
    //   })
    //   .catch(error => console.error(error));

    setAlert({
        "id": 1,
        "cameraName": "Camera 1",
        "dateTime": "2022-05-01T10:00:00Z",
        "alertType": "Motion",
        "alertLevel": "High",
        "location": "Front Door",
        "status": "Resolved",
        "alertDescription": "Motion detected at front door",
        "actionTaken": "",
        "additionalDetails": ""
      })
  };

  useEffect(() => {
    console.log("## 1 useeffect")
    // Fetch alert data from server
    // fetch(`/alerts/${alertId}`)
    //   .then(response => response.json())
    //   .then(data => setAlert(data))
    //   .catch(error => console.error(error));
    setAlert({
        "id": 1,
        "cameraName": "Camera 1",
        "dateTime": "2022-05-01T10:00:00Z",
        "alertType": "Motion",
        "alertLevel": "High",
        "location": "Front Door",
        "status": "New",
        "alertDescription": "Motion detected at front door",
        "actionTaken": "",
        "additionalDetails": ""
      })
  }, [alertId]);

  if (!alert) {
    return <p>Loading...</p>;
  }
  const alertStatusClass = `alert-status ${alert.status.toLowerCase()}`;

  return (
    <div className="single-alert-view">
      <div className={alertStatusClass}>
        <FontAwesomeIcon icon={faExclamationCircle} size="2x" />
        <div className="alert-status-text">
          <span className="alert-status-title">{alert.status}</span>
          <span className="alert-status-time">{alert.dateTime}</span>
        </div>
      </div>
      <div className="alert-content">
        <h2 className="alert-type">{alert.alertType}</h2>
        <div className="alert-info">
          <div className="alert-info-item">
            <strong>Alert Level:</strong> {alert.alertLevel}
          </div>
          <div className="alert-info-item">
            <strong>Camera:</strong> {alert.cameraName}
          </div>
          <div className="alert-info-item">
            <strong>Location:</strong> {alert.location}
          </div>
          <div className="alert-info-item">
            <strong>Additional Details:</strong> {alert.additionalDetails}
          </div>
          <div className="alert-info-item">
            <strong>Action Taken:</strong> {alert.actionTaken}
          </div>
        </div>
        <div className="alert-description">{alert.alertDescription}</div>
        <div className="alert-actions">
          {alert.status !== 'Resolved' && (
            <button className="resolve-button" onClick={handleResolve}>
              Mark as Resolved
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleAlertView;
