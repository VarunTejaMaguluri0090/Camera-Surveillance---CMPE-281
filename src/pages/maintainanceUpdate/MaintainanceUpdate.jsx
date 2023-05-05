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
      const url = `http://127.0.0.1:3002/maintainancePage/${id}`;
      await axios.get(url)
      .then(response => {
        setData(response.data[0]);
      })
      .catch(error => {
        console.log(error);
    });
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://127.0.0.1:3002/maintainancePage/${id}`;
    
    await axios.put(url, data).then(()=>{
      alert("The entry has been updated !")
    });
  
    navigate('/maintain');
  };

  return (
    <div className="editMaintainancePage" align="center" style={divStyle}>
      <h2>Maintainance Request - ID - {id}</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        
        <TextField
        className={classes.textField}
        label="Date"
        type="date"
        value={data.date}
        variant="outlined"
        onChange={(e) => setData({ ...data, date: e.target.value })}
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
          value={data.reason}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setData({ ...data, reason: e.target.value })}
        />
        <TextField
          className={classes.textField}
          label="Status"
          variant="outlined"
          type="text"
          value={data.status}
          required
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setData({ ...data, status: e.target.value })}
        />
        <TextField
          className={classes.textField}
          label="Location"
          variant="outlined"
          type="text"
          value={data.location}
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

export default EditMaintainance;
