import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import {Profilerows} from "./profileDummyData"
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

const ProfileNew = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [persona, setPersona] = useState('');
  const classes = useStyles();

  const divStyle = {
    width: '100%',
    padding: '20px'
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handlePersonaChange = (event) => {
    setPersona(event.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = {
        id: Profilerows.length + 1,
        name: name,
        age: age,
        persona: persona,
      };
    console.log(newEntry);

    

    axios.post('http://127.0.0.1:3002/manageProfile/', newEntry)
      .then(response => {
        alert("New Entry Created !");
        navigate('/manageProfile');
      })
      .catch(error => {
        console.log(error);
    });

    
  };

  return (
    <div className="ProfilePage" align="center" style={divStyle}>
      <h2>New User </h2>
      <form className={classes.form} onSubmit={handleSubmit}>
      <label class = "cameraStreamText">
      Name
                </label>
      <TextField
        label=""
        type="text"
        value={name}
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
        onChange={handleNameChange}
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
        InputLabelProps={{
          shrink: true,
        }}
        
      />
<label class = "cameraStreamText">
Age
                </label>
      <TextField
        label=""
        type="number"
        value={age}
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
        onChange={handleAgeChange}
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
      Persona
                </label>
      <TextField
        label=""
        type="text"
        value={persona}
        hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
        onChange={handlePersonaChange}
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
        InputLabelProps={{
          shrink: true,
        }}
       
  />
  
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </form>
    </div>
  );


};

export default ProfileNew;
