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
    marginTop: theme.spacing(1),
  },
  textField: {
    marginBottom: theme.spacing(1),
  },
  button: {
     marginTop: theme.spacing(1),
  },
}));

const MaintainanceNew = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
    const [reason, setReason] = useState('');
    const [location, setLocation] = useState('');
    const [assiged, setAssiged] = useState('');
    const [severity, setSeverity] = useState('');
    const [issueDesc, setIssueDesc] = useState('');
    const [details, setDetails] = useState('');
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
        assiged: assiged,
        severity: severity,
        issueDesc: issueDesc,
        details: details
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
<<<<<<< HEAD
      <h3>Create a new Maintainance Request Update</h3>
=======
      <h2 className="heading-main">Maintainance Request </h2>
>>>>>>> 4f1542306e3aee6f8f02fdf34f1cd2477e842536
      <form className={classes.form} onSubmit={handleSubmit}>
      <label class = "cameraStreamText">
      Date
                </label>
      <TextField
      hiddenLabel
      id="filled-hidden-label-normal"
      defaultValue="Normal"
      variant="filled"
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
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
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


<label class = "cameraStreamText">
      Assigned
                </label>
      <TextField
        label=""
        type="text"
        value={assiged}
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 1px black",
            fontWeight:"bold",
            borderWidth:"2.3px"
            
          }
        }}
        onChange={(e) => setAssiged(e.target.value)}
        required
        fullWidth
        margin="normal"
      />



<label class = "cameraStreamText">
      Severity : 
      </label>
      <TextField
      hiddenLabel
      id="filled-hidden-label-normal"
      defaultValue="Normal"
      variant="filled"
        label=""
        type="text"
        value={severity}
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 0px black",
            fontWeight:"bold",
            borderWidth:"1px"
            
          }
        }}
        onChange={(e) => setSeverity(e.target.value)}
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />

<label class = "cameraStreamText">
      Issue Description : 
      </label>
      <TextField
      hiddenLabel
      id="filled-hidden-label-normal"
      defaultValue="Normal"
      variant="filled"
        label=""
        type="text"
        value={issueDesc}
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 0px black",
            fontWeight:"bold",
            borderWidth:"1px"
            
          }
        }}
        onChange={(e) => setIssueDesc(e.target.value)}
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />

<label class = "cameraStreamText">
      Additional Details : 
      </label>
      <TextField
      hiddenLabel
      id="filled-hidden-label-normal"
      defaultValue="Normal"
      variant="filled"
        label=""
        type="text"
        value={details}
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 0px black",
            fontWeight:"bold",
            borderWidth:"1px"
            
          }
        }}
        onChange={(e) => setDetails(e.target.value)}
        required
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />


 <FormControl component="fieldset" margin="normal">
        <RadioGroup name="status" value={status} onChange={handleStatusChange} row>
          <FormControlLabel value="Active" control={<Radio />} label="Active" />
          <FormControlLabel value="Resolved" control={<Radio />} label="Resolved" />
        </RadioGroup>
      </FormControl>


      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </form>
    </div>
  );

};

export default MaintainanceNew;
