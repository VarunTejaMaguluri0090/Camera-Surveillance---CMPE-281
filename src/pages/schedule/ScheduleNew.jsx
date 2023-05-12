import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import {Schedulerows} from "./scheduleDummyData"
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ScheduleNew = () => {
  const navigate = useNavigate();
  const [schedule_date, setschedule_date] = useState('');
    const [camera_number, setcamera_number] = useState('');
    const [status, setStatus] = useState('Low');
    const [incharge, setIncharge] = useState('');
    const [type, setType] = useState('');
    const [details, setDetails] = useState('');
    const [location, setLocation] = useState('');
  const classes = useStyles();

  const divStyle = {
    width: '100%',
    padding: '20px'
  };


  const handleScheduleDateChange = (event) => {
    setschedule_date(event.target.value);
  };
  
  const handleCameraNumberChange = (event) => {
    setcamera_number(event.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleInchargeChange = (e) => {
    setIncharge(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleDetailChange = (e) => {
    setDetails(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = {
        id: Schedulerows.length + 1,
        schedule_date: schedule_date,
        camera_number: camera_number,
        status: status,
        incharge: incharge,
        type: type,
        details: details,
        location: location
      };
    console.log(newEntry);
    

    axios.post('http://127.0.0.1:3002/schedule/', newEntry).then((res)=>{
      alert("new record is succesfully created")
      navigate('/schedule');
    }).catch(error => {
      console.log(error);
  });
   
  };

  return (
    <div className="schedulePage" align="center" style={divStyle}>
      <h2>Schedule Request </h2>
      <form className={classes.form} onSubmit={handleSubmit}>
      <label class = "cameraStreamText">
      Schedule Date
                </label>
      <TextField
        label=""
        type="date"
        value={schedule_date}
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
        onChange={handleScheduleDateChange}
        required
        fullWidth
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 1px black",
            fontWeight:"bold",
            borderWidth:"2.3px"
            
          }
        }}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
  <label class = "cameraStreamText">
  Camera Number
                </label>
      <TextField
        label=""
        type="text"
        value={camera_number}
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
        onChange={handleCameraNumberChange}
        required
        fullWidth
        margin="normal"
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 1px black",
            fontWeight:"bold",
            borderWidth:"2.3px"
            
          }
        }}
      />
      <label class = "cameraStreamText">
  Incharge
                </label>
      <TextField
        label=""
        type="text"
        value={incharge}
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
        onChange={handleInchargeChange}
        required
        fullWidth
        margin="normal"
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 1px black",
            fontWeight:"bold",
            borderWidth:"2.3px"
            
          }
        }}
      />

<label class = "cameraStreamText">
  Type
                </label>
      <TextField
        label=""
        type="text"
        value={type}
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
        onChange={handleTypeChange}
        required
        fullWidth
        margin="normal"
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 1px black",
            fontWeight:"bold",
            borderWidth:"2.3px"
            
          }
        }}
      />

<label class = "cameraStreamText">
  Details
                </label>
      <TextField
        label=""
        type="text"
        value={details}
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
        onChange={handleDetailChange}
        required
        fullWidth
        margin="normal"
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 1px black",
            fontWeight:"bold",
            borderWidth:"2.3px"
            
          }
        }}
      />

<label class = "cameraStreamText">
  Location
                </label>
      <TextField
        label=""
        type="text"
        value={location}
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
        onChange={handleLocationChange}
        required
        fullWidth
        margin="normal"
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 1px black",
            fontWeight:"bold",
            borderWidth:"2.3px"
            
          }
        }}
      />


<label class = "cameraStreamText">
  Priority
                </label>
      <FormControl component="fieldset" margin="normal">
        <RadioGroup name="status" value={status} onChange={handleStatusChange} row>
        
          <FormControlLabel value="Low" control={<Radio />} label="Low" />
          <FormControlLabel value="High" control={<Radio />} label="High" />
        </RadioGroup>
      </FormControl>

    
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </form>
    </div>
  );

};

export default ScheduleNew;
