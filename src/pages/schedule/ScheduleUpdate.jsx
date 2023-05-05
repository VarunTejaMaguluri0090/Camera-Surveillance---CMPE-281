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
      setData(res.data)
    })
  }, []);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const editEntry = {
      schedule_date : data.schedule_date,
      camera_number : data.camera_number,
      status : data.status
    }

   
      axios.put(`http://127.0.0.1:3002/schedule/${id}`, editEntry).then((res)=>{
       alert("data has been succesfully updated")
      })
      navigate('/schedule')
  }

  return (
    <div className="schedulePage" align="center" style={divStyle}>
      <h2>Schedule Request - ID - {id}</h2>
      <form className={classes.form} onSubmit={handleSubmit}>

      <label class = "cameraStreamText">
      Schedule Date
                </label>
        <TextField
        className={classes.textField}
        label=""
        type="date"
        value={data.ScheduleDate}
        sx={{
          input: {
            color: "black",
            background: "#F8F8F8",
            border: "solid 1px black",
            fontWeight:"bold",
            borderWidth:"2.3px"
            
          }
        }}
        variant="outlined"
        onChange={(e) => setData({ ...data, ScheduleDate: e.target.value })}
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
          variant="outlined"
          type="text"
          required
          value={data.CameraNumber}
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
          onChange={(e) => setData({ ...data, CameraNumber: e.target.value })}
        />
         <label class = "cameraStreamText">
         Status
                </label>
        <TextField
          className={classes.textField}
          label=""
          variant="outlined"
          type="text"
          value={data.Status}
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
          onChange={(e) => setData({ ...data, Status: e.target.value })}
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
