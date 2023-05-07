import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useParams, useNavigate } from 'react-router-dom';
import {Maintainancerows} from "../../dummyData"
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';


//date
//1.) initial variable date, state is '', function setDate will set the final changed date
//onChange-> sligtest change to date is dynaically reflected via SetDate, when I press submit, final date is changed via API
//e.target.value will set it via handle submit setDate and setState will set it

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

const MaintainanceNew = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
    const [reason, setReason] = useState('');
    const [location, setLocation] = useState('');
    const [status, setStatus] = useState('Active');
  const classes = useStyles();

  const divStyle = {
    width: '100%',
    padding: '20px'
  };


  
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = {
        date: date,
        reason: reason,
        status: status,
        location: location,
      };
      
    axios.post('http://127.0.0.1:3002/maintainancePage/', newEntry)
      .then(response => {
        alert("New Entry Created !");
      })
      .catch(error => {
        console.log(error);
    });

    navigate('/maintain');
  };

  return (
    <div className="editMaintainancePage" align="center" style={divStyle}>
      <h2>Maintainance Request </h2>
      <form className={classes.form} onSubmit={handleSubmit}>
      <label class = "cameraStreamText">
      Date
                </label>
      <TextField
        label=""
        type="date"
        value={date}
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 1px black",
            fontWeight:"bold",
            borderWidth:"2.3px"
            
          }
        }}
        onChange={(e) => setDate(e.target.value)}
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
 <label class = "cameraStreamText">
 Reason
                </label>
      <TextField
        label=""
        type="text"
        value={reason}
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 1px black",
            fontWeight:"bold",
            borderWidth:"2.3px"
            
          }
        }}
        onChange={(e) => setReason(e.target.value)}
        required
        fullWidth
        margin="normal"
      />

      <FormControl component="fieldset" margin="normal">
        <RadioGroup name="status" value={status} onChange={handleStatusChange} row>
          <FormControlLabel value="Active" control={<Radio />} label="Active" />
          <FormControlLabel value="Resolved" control={<Radio />} label="Resolved" />
        </RadioGroup>
      </FormControl>
      <label class = "cameraStreamText">
      Location
                </label>
      <TextField
        label=""
        type="text"
        value={location}
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 1px black",
            fontWeight:"bold",
            borderWidth:"2.3px"
            
          }
        }}
        onChange={(e) => setLocation(e.target.value)}
        required
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </form>
    </div>
  );

};

export default MaintainanceNew;
