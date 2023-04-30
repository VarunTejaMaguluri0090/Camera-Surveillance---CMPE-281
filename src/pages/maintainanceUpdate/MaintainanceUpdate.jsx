import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useParams, useNavigate } from 'react-router-dom';
import {Maintainancerows} from "../../dummyData"



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

const EditMaintainance = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const classes = useStyles();

  const divStyle = {
    width: '100%'
  };

  useEffect(() => {
    async function fetchData() {
      var selectedObject = Maintainancerows.filter(row => row.id == id)[0]
      setData(selectedObject);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedMaintainanceRows = Maintainancerows.map(row => {
      if(row.id === id) {
        return {
          ...row,
          Date: data.Date,
          Reason: data.Reason,
          Status: data.Status,
          Location: data.Location
        }
      }
      return row;
    });
    console.log(Maintainancerows);
  
    // navigate('/maintain');
  };

  return (
    <div className="editMaintainancePage" align="center" style={divStyle}>
      <h2>Maintainance Request - ID - {id}</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        {/* <TextField
          className={classes.textField}
          label="Date"
          variant="outlined"
          type="text"
          value={data.Date}
          onChange={(e) => setData({ ...data, Date: e.target.value })}
        /> */}
        <TextField
        className={classes.textField}
        label="Date"
        type="date"
        value={data.Date}
        variant="outlined"
        onChange={(e) => setData({ ...data, Date: e.target.value })}
        required
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
        <TextField
          className={classes.textField}
          label="Reason"
          variant="outlined"
          type="text"
          required
          value={data.Reason}
          onChange={(e) => setData({ ...data, Reason: e.target.value })}
        />
        <TextField
          className={classes.textField}
          label="Status"
          variant="outlined"
          type="text"
          value={data.Status}
          required
          onChange={(e) => setData({ ...data, Status: e.target.value })}
        />
        <TextField
          className={classes.textField}
          label="Location"
          variant="outlined"
          type="text"
          value={data.Location}
          required
          onChange={(e) => setData({ ...data, Location: e.target.value })}
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

export default EditMaintainance;
