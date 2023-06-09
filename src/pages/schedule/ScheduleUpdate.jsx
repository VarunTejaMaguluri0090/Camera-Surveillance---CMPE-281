import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

//Edit Part is executed here

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

const EditSchedule = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const classes = useStyles();

  const divStyle = {
    width: '100%'
  };

  useEffect(() => {
    axios.get(`http://127.0.0.1:3002/schedule/${id}`).then((res)=>{
      let response = res.data
      // let d = new Date(response.schedule_date);
      response = {...response, schedule_date: response.schedule_date.split('T')[0]}
      setData(response)
    })
  }, []);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const editEntry = {
      schedule_date : data.schedule_date,
      camera_number : data.camera_number,
      status : data.status,
      incharge: data.incharge,
      type: data.type,
      details: data.details,
      location: data.location
    }

   
      axios.put(`http://127.0.0.1:3002/schedule/${id}`, editEntry).then((res)=>{
        console.log(data)
       alert("data has been succesfully updated")
      })
      navigate('/schedule')
  }

  return (
    <div className="schedulePage" align="center" style={divStyle}>
      <h2 className="heading-main">Schedule Request - ID - {id}</h2>
      <form className={classes.form} onSubmit={handleSubmit}>

      <label class = "cameraStreamText">
      Schedule Date
                </label>
        <TextField
        className={classes.textField}
        label=""
        type="date"
        value={data.schedule_date}
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
        // variant="outlined"
        onChange={(e) => setData({ ...data, schedule_date: e.target.value })}
        required
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />



      <label class = "cameraStreamText">
      Camera Number
                </label>
        <TextField
          className={classes.textField}
          label=""
          hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
          type="text"
          required
          value={data.camera_number}
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
          onChange={(e) => setData({ ...data, camera_number: e.target.value })}
        />



         <label class = "cameraStreamText">
         Status
                </label>
        <TextField
          className={classes.textField}
          label=""
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="Normal"
          variant="filled"
          type="text"
          value={data.status}
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
          onChange={(e) => setData({ ...data, status: e.target.value })}
        />



<label class = "cameraStreamText">
         Incharge
                </label>
        <TextField
          className={classes.textField}
          label=""
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="Normal"
          variant="filled"
          type="text"
          value={data.incharge}
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
          onChange={(e) => setData({ ...data, incharge: e.target.value })}
        />



<label class = "cameraStreamText">
         Type
                </label>
        <TextField
          className={classes.textField}
          label=""
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="Normal"
          variant="filled"
          type="text"
          value={data.type}
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
          onChange={(e) => setData({ ...data, type: e.target.value })}
        />



<label class = "cameraStreamText">
         Details
                </label>
        <TextField
          className={classes.textField}
          label=""
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="Normal"
          variant="filled"
          type="text"
          value={data.details}
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
          onChange={(e) => setData({ ...data, details: e.target.value })}
        />



<label class = "cameraStreamText">
         Location
                </label>
        <TextField
          className={classes.textField}
          label=""
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="Normal"
          variant="filled"
          type="text"
          value={data.location}
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
          onChange={(e) => setData({ ...data, location: e.target.value })}
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

export default EditSchedule;
