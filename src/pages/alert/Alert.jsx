import React from "react";
import SideBar from "../../components/sideBar/SideBar";
import "./AlertPage.css";
import { useState, useEffect } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import 'react-datepicker/dist/react-datepicker.css';
import { AlertFeaturedInfo } from "../../pages/alert/AlertFeaturedInfo";


const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));


export default function Alert() {
const [alertsData, setData] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [alertsPerPage] = useState(5); // Change this value to adjust the number of alerts per page
const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);


const getRowColor = (level) => {
  switch (level) {
    case "Low":
      return "#7CFC00";
    case "Medium":
      return "#FFA500";
    case "High":
      return "#FF0000";
    default:
      return "white";
  }
};

async function handleDateRangeChange(start, end) {
  setStartDate(start);
  setEndDate(end);
  axios.get(`http://127.0.0.1:3002/alerts?startDate=${new Date(startDate).toISOString()}&endDate=${new Date(endDate).toISOString()}`)
  .then(response => response.json())
  .then(data => setData(data))
  .catch(error => console.error(error));
}
// Get the index of the last alert on the current page
const indexOfLastAlert = currentPage * 5;

// Get the index of the first alert on the current page
const indexOfFirstAlert = indexOfLastAlert - alertsPerPage;

// Get the alerts for the current page
const currentAlerts = alertsData.slice(indexOfFirstAlert, indexOfLastAlert);

console.log("currentAlertscurrentAlerts", currentAlerts)
async function getAllAlerts(){
    const result = await axios.get("http://127.0.0.1:3002/alerts/")
    console.log(result.data)
    setData(result.data)
}

useEffect(()=>{
    getAllAlerts()
},[])

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(alertsData.length / alertsPerPage); i++) {
    pageNumbers.push(i);
  }


   // Render the page numbers
   const renderedPageNumbers = pageNumbers.map(number => (
      <a href="#" className={currentPage === number ? "active" : ""} onClick={() => setCurrentPage(number)}>
        {number}
      </a>
  ));


  // Loop through the current alerts and render them
  const renderedAlerts = currentAlerts.map(alert => (
    <tr key={alert.AlertID}>
    <td>{alert.CameraName}</td>
    <td>{alert.AlertID}</td>
    <td>{alert.TimeDate}</td>
    <td>{alert.AlertType}</td>
    <td key={alert.alertId} style={{ backgroundColor: getRowColor(alert.AlertLevel) }}>{alert.AlertLevel}</td>
    <td>{alert.Location}</td>
    <td>{alert.Status}</td>
    <td>{alert.AlertDescription}</td>
    <td>{alert.ActionTaken}</td>
    <td>{alert.AdditionalDetails}</td>
  </tr>
  ));
  


// const alertsData = [  {    cameraId: "Camera 1",    alertId: "AL0001",    time: "2023-04-11 10:30:00",    type: "Motion Detection",    level: "Low",    location: "Entrance",    status: "New",    description: "Object detected",    actionTaken: "",    additionalDetails: "1 person",  }, 
// {    cameraId: "Camera 2",    alertId: "AL0002",    time: "2023-04-11 11:15:00",    type: "Sound Detection",    level: "Medium",    location: "Backyard",    status: "In Progress",    description: "Unusual noise",    actionTaken: "",    additionalDetails: "",  },  
// {    cameraId: "Camera 3",    alertId: "AL0003",    time: "2023-04-11 12:00:00",    type: "Face Recognition",    level: "High",    location: "Office",    status: "Resolved",    description: "Unauthorized person detected",    actionTaken: "Security alerted",    additionalDetails: "2 people",  },  
// {    cameraId: "Camera 4",    alertId: "AL0004",    time: "2023-04-11 13:45:00",    type: "Motion Detection",    level: "Low",    location: "Parking lot",    status: "New",    description: "Object detected",    actionTaken: "",    additionalDetails: "1 car",  }, 
// {    cameraId: "Camera 5",    alertId: "AL0005",    time: "2023-04-11 14:30:00",    type: "Sound Detection",    level: "High",    location: "Parking lot",    status: "In Progress",    description: "Gunshot detected",    actionTaken: "",    additionalDetails: "Unknown source",  }];
 async function handleDateRangeSubmit(event) {
    event.preventDefault();
    let result = await axios.get(`http://127.0.0.1:3002/alerts?startDate=${new Date(startDate).toISOString()}&endDate=${new Date(endDate).toISOString()}`)
    setData(result.data);
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
      <div>
        {/* <DateRangePicker onChange={handleDateRangeChange} /> */}
      </div>

      {/* <div>
      <form onSubmit={handleDateRangeChange}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <span> - </span>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        <button type="submit">Submit</button>
      </form>
      </div> */}

      {/* <button style={{marginLeft: 50}} type="submit">Filter Alerts</button> */}
      <div className="alert-page">
      <AlertFeaturedInfo />
      {/* <DateRangePicker onChange={handleDateRangeChange} /> */}
      
        <h1 className="heading-main">Alerts</h1>
        <table>
          <thead>
            <tr>
              <th>Camera Name/ID</th>
              <th>Alert ID</th>
              <th>Time/Date</th>
              <th>Alert Type</th>
              <th>Alert Level</th>
              <th>Location</th>
              <th>Status</th>
              <th>Alert Description</th>
              <th>Action Taken</th>
              <th>Additional Details</th>
            </tr>
          </thead>
          
          <tbody>{renderedAlerts}</tbody>
        </table>
        {/* <ul> */}
        <div class="pagination">{renderedPageNumbers}</div>
        {/* </ul> */}
      </div>
    </>
  );




    
        

























  }

  //   return (
  //     <div>
  //       <DateRangePicker onChange={handleDateRangeChange} />
  //       <AlertList alerts={alerts} />
  //     </div>
  //   );
  // }
  
  // function AlertList({ alerts }) {
  //   return (
  //     <div>
  //       {alerts.map(alert => (
  //         <div key={alert.AlertID}>
  //           <p>Camera: {alert.CameraName}</p>
  //           <p>Time: {alert.TimeDate}</p>
  //           <p>Alert Type: {alert.AlertType}</p>
  //           <p key={alert.alertId} style={{ backgroundColor: getRowColor(alert.AlertLevel) }}>{alert.AlertLevel}</p>
  //           <p>Location: {alert.Location}</p>
  //           <p>Status : {alert.Status}</p>
  //           <p>Description: {alert.AlertDescription}</p>
  //           <p>Action Taken: {alert.ActionTaken}</p>
  //           <p>Additional Details: {alert.AdditionalDetails}</p>
  //         </div>
  //       ))}
  //     </div>
  //   );
  //   }
  // return (
  //   <>
  //   {/* <SideBar /> */}
  //   <div className="alert-page">
  //     <h1>Alerts</h1>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Camera Name/ID</th>
  //           <th>Alert ID</th>
  //           <th>Time/Date</th>
  //           <th>Alert Type</th>
  //           <th>Alert Level</th>
  //           <th>Location</th>
  //           <th>Status</th>
  //           <th>Alert Description</th>
  //           <th>Action Taken</th>
  //           <th>Additional Details</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //       {renderedAlerts}

  //           </tbody>
  //         </table>
  //         <ul>
  //       {renderedPageNumbers}
  //     </ul>
  //         </div>
  //         </>
  //         )
