import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useParams, useNavigate } from 'react-router-dom';
import {Maintainancerows} from "../../dummyData"
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


  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  
  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };
  
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = {
        id: Maintainancerows.length + 1,
        Date: date,
        Reason: reason,
        Status: 'Active',
        Location: location,
      };
    
    Maintainancerows.push(newEntry);
    navigate('/maintain');
  };

  return (
    <div className="editMaintainancePage" align="center" style={divStyle}>
      <h2>Maintainance Request </h2>
      <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />

      <TextField
        label="Reason"
        type="text"
        value={reason}
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

      <TextField
        label="Location"
        type="text"
        value={location}
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
