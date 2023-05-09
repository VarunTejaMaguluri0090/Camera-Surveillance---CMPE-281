import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import './CameraDisplayView.css'
import { Link } from 'react-router-dom';

const CameraDisplayView = ({ alertId }) => {
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
        {/* <FontAwesomeIcon icon={faExclamationCircle} size="2x" /> */}
        <div className="alert-status-text">
          <span className="alert-status-title">Camera ID</span>
          <span className="alert-status-time">56399464839392</span>
        </div>
      </div>
      <div className="alert-content">
        {/* <h2 className="alert-type">{alert.alertType}</h2> */}
        <div className="alert-info">
          <div className="alert-info-item">
            <strong>Camera Number :</strong> Cam 2
          </div>
         
          <div className="alert-info-item">
            <strong>Camera Location:</strong> Spartan Complex Building
          </div>
          <div className="alert-info-item">
            <strong>Camera Status:</strong> Active
          </div>
          <div className="alert-info-item">
            <strong>Additional Details:</strong> This camera is located in the Spartan Complex Building on the 1st Floor.
          </div>
        </div>
       
        <div className="alert-actions">
          {alert.status !== 'Resolved' && (
             <Link to ={"/home"}>
             <button className="resolve-button1">Go Back to Home Page</button>
         </Link>
            
              
        
            
          )}
          
        </div>
        <video id="video8" width="800" height="500"  src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/msqd2XJ/videoblocks-wide-view-slow-motion-shot-of-a-masked-hacker-walking-through-corporate-data-center-with-rows-of-working-rack-servers_hfpehsaj7__d768b34a501481545cf0d033e2e65b33__P360.mp4" controls></video>
      </div>
    </div>
  );
};

export default CameraDisplayView;
