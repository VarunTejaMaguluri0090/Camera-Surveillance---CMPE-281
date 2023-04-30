import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useParams, useNavigate } from 'react-router-dom';
import {Profilerows} from "./profileDummyData"



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

  const divStyle = {
    width: '100%'
  };

  useEffect(() => {
    async function fetchData() {
      var selectedObject = Profilerows.filter(row => row.id == id)[0]
      setData(selectedObject);
      console.log(selectedObject)
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProfilerows = Profilerows.map(row => {
      if(row.id === id) {
        return {
          ...row,
          name: data.name,
          age: data.age,
        }
      }
      return row;
    });
    console.log(updatedProfilerows);
  
    navigate('/manageProfile');
  };

  return (
    <div className="ProfilePage" align="center" style={divStyle}>
      <h2>User - ID - {id}</h2>
      <form className={classes.form} onSubmit={handleSubmit}>
        
        <TextField
          className={classes.textField}
          label="Name"
          variant="outlined"
          type="text"
          required
          value={data.name}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <TextField
          className={classes.textField}
          label="Age"
          variant="outlined"
          type="number"
          value={data.age}
          required
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setData({ ...data, age: e.target.value })}
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
