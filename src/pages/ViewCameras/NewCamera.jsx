import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import {CameraRows} from "./CameraDummyData"
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

const NewCamera = () => {
  const navigate = useNavigate();
  const [camera_id, setcamera_id] = useState('');
    const [camera_number, setcamera_number] = useState('');
    const [camera_location, setcamera_location] = useState('');
    const [status, setStatus] = useState('Active');
  const classes = useStyles();

  const divStyle = {
    width: '100%',
    padding: '20px'
  };


  const handleCameraIDChange = (event) => {
    setcamera_id(event.target.value);
  };
  
  const handleCameraNumberChange = (event) => {
    setcamera_number(event.target.value);
  };

  const handleCameraLocationChange = (event) => {
    setcamera_location(event.target.value);
  };
  
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = {
        id: CameraRows.length + 1,
        camera_id: camera_id,
        camera_number: camera_number,
        camera_location: camera_location,
        status: 'Active',
      };
    console.log(newEntry);
    

    axios.post('http://127.0.0.1:3002/viewCameras/', newEntry).then((res)=>{
      alert("new camera has been succesfully added")
    }).catch(error => {
      console.log(error);
  });
    navigate('/viewCameras');
  };

  return (
    <div className="schedulePage" align="center" style={divStyle}>
      <h2>Add Camera</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
      <label class = "cameraStreamText">
      Camera ID
                </label>
      <TextField
        label=""
        type="text"
        value={camera_id}
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
        onChange={handleCameraIDChange}
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
      Camera Location
                </label>
      <TextField
        label=""
        type="text"
        value={camera_location}
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
        onChange={handleCameraLocationChange}
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
      Status
                </label>
      <TextField
        label=""
        type="text"
        value={status}
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
        onChange={handleStatusChange}
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

      {/* <FormControl component="fieldset" margin="normal">
        <RadioGroup name="status" value={status} onChange={handleStatusChange} row>
          <FormControlLabel value="Low" control={<Radio />} label="Low" />
          <FormControlLabel value="High" control={<Radio />} label="High" />
        </RadioGroup>
      </FormControl> */}

    
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </form>
    </div>
  );

};

export default NewCamera;
