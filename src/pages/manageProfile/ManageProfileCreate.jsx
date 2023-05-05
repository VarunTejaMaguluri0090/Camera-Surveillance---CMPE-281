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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = {
        id: Profilerows.length + 1,
        name: name,
        age: age,
      };
    console.log(newEntry);

    

    axios.post('http://127.0.0.1:3002/manageProfile/', newEntry)
      .then(response => {
        alert("New Entry Created !");
      })
      .catch(error => {
        console.log(error);
    });

    navigate('/manageProfile');
  };

  return (
    <div className="ProfilePage" align="center" style={divStyle}>
      <h2>New User </h2>
      <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        type="text"
        value={name}
        onChange={handleNameChange}
        required
        
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />

      <TextField
        label="Age"
        type="number"
        value={age}
        onChange={handleAgeChange}
        required
        
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </form>
    </div>
  );

};

export default ProfileNew;
