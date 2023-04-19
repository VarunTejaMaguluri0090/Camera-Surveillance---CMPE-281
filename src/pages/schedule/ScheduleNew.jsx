import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import {Schedulerows} from "./scheduleDummyData"
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';


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
  const [scheduleDate, setScheduleDate] = useState('');
    const [cameraNumber, setCameraNumber] = useState('');
    const [status, setStatus] = useState('Low');
  const classes = useStyles();

  const divStyle = {
    width: '100%',
    padding: '20px'
  };


  const handleScheduleDateChange = (event) => {
    setScheduleDate(event.target.value);
  };
  
  const handleCameraNumberChange = (event) => {
    setCameraNumber(event.target.value);
  };
  
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = {
        id: Schedulerows.length + 1,
        ScheduleDate: scheduleDate,
        CameraNumber: cameraNumber,
        Status: 'Active',
      };
    console.log(newEntry);
    // Schedulerows.push(newEntry);
    navigate('/schedule');
  };

  return (
    <div className="schedulePage" align="center" style={divStyle}>
      <h2>Schedule Request </h2>
      <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Schedule Date"
        type="date"
        value={scheduleDate}
        onChange={handleScheduleDateChange}
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />

      <TextField
        label="Camera Number"
        type="text"
        value={cameraNumber}
        onChange={handleCameraNumberChange}
        required
        fullWidth
        margin="normal"
      />

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
