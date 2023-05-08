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
        let res = response.data[0];
        let d = new Date(res.date);
        res = {...res, date: d.toISOString().split('T')[0]}
        setData(res);
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
         <label class = "cameraStreamText">Date</label>
        <TextField
        className={classes.textField}
        label=""
        type="date"
        value={data.date}
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
        onChange={(e) => setData({ ...data, date: e.target.value })}
        required
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
       <label class = "cameraStreamText">
       Reason
                </label>
        <TextField
          className={classes.textField}
          label=""
          variant="outlined"
          type="text"
          required
          value={data.reason}
          sx={{
            input: {
              color: "black",
              background: "#F8F8F8",
              border: "solid 1px black",
              fontWeight:"bold",
              borderWidth:"2.3px"
              
            }
          }}
          onChange={(e) => setData({ ...data, reason: e.target.value })}
        />

<label class = "cameraStreamText">
Status
                </label>
        <TextField
          className={classes.textField}
          label=""
          variant="outlined"
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
          onChange={(e) => setData({ ...data, status: e.target.value })}
        />
        <label class = "cameraStreamText">
        Location
                </label>
        <TextField
          className={classes.textField}
          label=""
          variant="outlined"
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
