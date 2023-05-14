import React from "react";
import "./reportPage.css";
import SideBar from "../../components/sideBar/SideBar";
//import InfiniteScroll from 'react-infinite-scroll-component'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from "react";
import ReportChart from "../../pages/report/reportChart";
import ReportPieChart from "../../pages/report/reportPieChart";
import ReportBarGraph from "../../pages/report/reportBarGraph";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ReportPage = () => {
  const systemMetrics = {
    uptime: "02:34:43:000 Hours",
    downtime: "01:22:28:000 Hours",
    responseTime: "250ms",
    otherMetrics: ""
  };

  const cameraHealth = [
    {
      name: "Cam1",
      id: "578594933043",
      location: "Engg. Building Main Entrance",
      status: "Active",
      details: "The camera health looks moderate"
    },
    {
      name: "Cam2",
      id: "67392889320323",
      location: "Parking Lot East Entrance",
      status: "Offline",
      details: "The camera is under maintainance"
    },
    // more cameras here...
  ];

  const incidentReports = [
    {
      time: "2023-05-02 12:30:00",
      location: "Engg. Building Main Entrance",
      type: "Intrusion",
      severity: "High",
      details: "Intrusion alert raised at Engg. Building Main Entrance"
    },
    {
      time: "2023-05-07 08:15:00",
      location: "Student Union",
      type: "Unauthorized Access",
      severity: "High",
      details: "Someone has been entered Student Union without proper authorization."
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


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
            
           
            {/* <p>Other Metrics: {systemMetrics.otherMetrics}</p> */}
          </div>
          <div className="metric-column">
            <h2 className="heading-sub">Camera health status</h2>

    
    <div class="Graphs1">
   
      <Grid item xs={12}>
        <Item><ReportChart/></Item>
      </Grid>
      


  </div>
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
                  <td>2023-05-02 12:30:00</td>
                  <td>Engg. Building Main Entrance</td>
                  <td>Intrusion</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>2023-05-07 08:15:00</td>
                  <td>Student Union</td>
                  <td>Unauthorized Access</td>
                  <td>High</td>
                </tr>
    
                <tr>
                  <td>2023-04-10 14:32:12</td>
                  <td>Parking Lot Entrance</td>
                  <td>Vandalism</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>2023-04-09 18:12:45</td>
                  <td>Staircase</td>
                  <td>Fire Alert</td>
                  <td>Medium</td>
                </tr>
            
    
                {/* more incident reports */}
              </tbody>
            </table>
          </div>
          <h2 className="heading-sub">Campus Incidents Analysis</h2>
          <div class="Graphs1">
    
   
      
      {/* <Grid item xs={2}>
      </Grid> */}
      <Grid item xs={12}>
        <Item><ReportPieChart/></Item>
      </Grid>
      


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
                  <td>John Martin</td>
                  <td>Accessed Cam3 Footage</td>
                  <td>2023-04-21 12:00:00</td>
                </tr>
                <tr>
                  <td>Andrew Lee</td>
                  <td>Sent request to access Cam1 logs</td>
                  <td>2023-04-18 08:30:00</td>
                </tr>
                <tr>
                  <td>Jenna Ortega</td>
                  <td>Accessed Cam7 logs</td>
                  <td>2023-04-18 08:30:00</td>
                </tr>
                <tr>
                  <td>Chris Ma</td>
                  <td>Sent request to access Cam5 logs</td>
                  <td>2023-04-18 08:30:00</td>
                </tr>
                <tr>
                  <td>Johnson Drew</td>
                  <td>Accessed Cam5 Alert Logs</td>
                  <td>2023-04-21 12:00:00</td>
                </tr>
                <tr>
                  <td>Kim Railey</td>
                  <td>Accessed Cam3 footage</td>
                  <td>2023-03-15 12:00:00</td>
                </tr>
                <tr>
                  <td>Shirley</td>
                  <td>Requested access for camera footages</td>
                  <td>2023-04-09 18:12:45</td>
                </tr>
                {/* more user activity logs */}
              </tbody>
            </table>
          </div>
          <h2 className="heading-sub">Users Information</h2>
            
          
            <div class="Graphs1">
            
              <Grid item xs={12}>
                <Item><ReportBarGraph/></Item>
              </Grid>
        
          </div>
    
          </div>
          </div>
          </>
           )}

export default ReportPage