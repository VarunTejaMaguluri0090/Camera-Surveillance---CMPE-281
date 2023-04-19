import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useParams, useNavigate } from 'react-router-dom';
import {Schedulerows} from "./scheduleDummyData"



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
    async function fetchData() {
      var selectedObject = Schedulerows.filter(row => row.id == id)[0]
      setData(selectedObject);
      console.log(selectedObject)
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedScheduleRows = Schedulerows.map(row => {
      if(row.id === id) {
        return {
          ...row,
          ScheduleDate: data.ScheduleDate,
          CameraNumber: data.CameraNumber,
          Status: data.Status
        }
      }
      return row;
    });
    console.log(updatedScheduleRows);
  
    navigate('/schedule');
  };

  return (
    <div className="schedulePage" align="center" style={divStyle}>
      <h2>Schedule Request - ID - {id}</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
        className={classes.textField}
        label="Schedule Date"
        type="date"
        value={data.ScheduleDate}
        variant="outlined"
        onChange={(e) => setData({ ...data, ScheduleDate: e.target.value })}
        required
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
        <TextField
          className={classes.textField}
          label="Camera Number"
          variant="outlined"
          type="text"
          required
          value={data.CameraNumber}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setData({ ...data, CameraNumber: e.target.value })}
        />
        <TextField
          className={classes.textField}
          label="Status"
          variant="outlined"
          type="text"
          value={data.Status}
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
