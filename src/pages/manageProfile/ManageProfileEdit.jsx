import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useParams, useNavigate } from 'react-router-dom';
import {Profilerows} from "./profileDummyData"
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

const EditProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const classes = useStyles();

  useEffect( ()=>{
    axios.get(`http://127.0.0.1:3002/manageProfile/${id}`).then(res =>{
      // console.log(res.data[0])
      setData(res.data[0])
    })
  },[])

  const divStyle = {
    width: '100%'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editEntry = {
      name : data.name,
      age: data.age,
      persona: data.persona
    }

    //axios = request, request body. post .then() we get the response
    axios.put(`http://127.0.0.1:3002/manageProfile/${id}`, editEntry).then(res =>{
      alert("your data has been upadated")
    })
    navigate('/manageProfile');
  };

  return (
    <div className="ProfilePage" align="center" style={divStyle}>
      <h2>User - ID - {id}</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
      <label class = "cameraStreamText">
      Name
                </label>
        <TextField
          className={classes.textField}
          label=""
          hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
          type="text"
          sx={{
            input: {
              color: "black",
              background: "#F8F8F8",
              border: "solid 1px black",
              fontWeight:"bold",
              borderWidth:"2.3px"
              
            }
          }}
          required
          // value={data.name}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
         <label class = "cameraStreamText">
         Age
                </label>
        <TextField
          className={classes.textField}
          label=""
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="Normal"
          variant="filled"
          type="number"
          value={data.age}
          sx={{
            input: {
              color: "black",
              background: "#F8F8F8",
              border: "solid 1px black",
              fontWeight:"bold",
              borderWidth:"2.3px"
              
            }
          }}
          required
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />

<label class = "cameraStreamText">
      Persona
                </label>
        <TextField
          className={classes.textField}
          label=""
          hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
          type="text"
          sx={{
            input: {
              color: "black",
              background: "#F8F8F8",
              border: "solid 1px black",
              fontWeight:"bold",
              borderWidth:"2.3px"
              
            }
          }}
          required
          // value={data.name}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setData({ ...data, persona: e.target.value })}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Save
        </Button>
      </form>
    </div>
  );


};

export default EditProfile;
