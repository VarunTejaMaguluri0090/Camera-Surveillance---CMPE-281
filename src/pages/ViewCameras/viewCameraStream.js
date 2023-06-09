import { useCallback, useState } from 'react';
import "./viewCameraStream.css"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';
import {
  Avatar,
  

  Typography
} from '@mui/material';
import { borderColor, borderRadius } from '@mui/system';

const user = {
  avatar: '/assets/avatars/avatar-anika-visser.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Anika Visser',
  timezone: 'GTM-7'
};


export default function ViewCameraStream() {

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  },
  {
    value: 'los-angeles',
    label: 'Los Angeles'
  }
];


  const [values, setValues] = useState({
    firstName: 'Anika',
    lastName: 'Visser',
    email: 'demo@Smart Cam.io',
    phone: '',
    state: 'los-angeles',
    country: 'USA'
  });

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
  
   <div>
    <center>
  <video controls width="750" height="450">
    <source src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/BloSxjK/a-computer-scans-a-crowded-subway-tunnel-using-facial-recognition-to-show-each-persons-personal-data-in-a-floating-display-that-follows-the-individual_nkvtj1y6__cedb377e9dae151528d68094e04a205e__P360.mp4" type="video/webm" />
  </video>
</center>



 

    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="single-alert-view">
      <Card >
        <CardHeader class = "cameraInfoText" align="center"
          subheader=""
          title="Camera Info"
        
         />


        <CardContent sx={{ pt: 2 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={5}
            >
              <Grid
                xs={12}
                md={6}
              >
                <label class = "cameraStreamText">
                Camera ID
                </label>
                <TextField
                  fullWidth
                  hiddenLabel
                  id="filled-hidden-label-normal"
                  defaultValue="Normal"
                  variant="filled"
                  helperText=""
                  label=""
                  
                  name="cameraId"
                  // onChange={handleChange}
                  
                  value={"65rhhjkjgdfd644rchh66"}
                  // sx={{
                  //   input: {
                  //     color: "black",
                  //     background: "#F8F8F8",
                  //     border: "solid 1px black",
                  //     fontWeight:"bold",
                  //     borderWidth:"2.3px"
                      
                  //   }
                  // }}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <label class = "cameraStreamText">
                Camera Location
                </label>
                <TextField
                  fullWidth
                  label=""
                  name="cameraLocation"
                  // onChange={handleChange}
                  hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
                  value={"Engg. Building, 2nd Floor"}
                  // sx={{
                  //   input: {
                  //     color: "black",
                  //     background: "#F8F8F8",
                  //     border: "solid 1px black",
                  //     fontWeight:"bold",
                  //     borderWidth:"2.3px"
                  //   }
                  // }}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                  <label class = "cameraStreamText">
                  Camera Number
                </label>
                <TextField
                  fullWidth
                  label=""
                  name="cameraNumber"
                  onChange={handleChange}
                  hiddenLabel
                  id="filled-hidden-label-normal"
                  defaultValue="Normal"
                  variant="filled"
                  value={"Camera 7"}
                  // sx={{
                  //   input: {
                  //     color: "black",
                  //     background: "#F8F8F8",
                  //     border: "solid 1px black",
                  //     fontWeight:"bold",
                  //     borderWidth:"2.3px"
                  //   }
                  // }}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                   <label class = "cameraStreamText">
                   Status
                </label>
                <TextField
                  fullWidth
                  label=""
                  name="status"
                  onChange={handleChange}
                  hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
                  value={"Active"}
                  // sx={{
                  //   input: {
                  //     color: "black",
                  //     background: "#F8F8F8",
                  //     border: "solid 1px black",
                  //     fontWeight:"bold",
                  //     borderWidth:"2.3px"
              
                  //   }
                  // }}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               
              </Grid>
              {/* <Button type="submit" variant="contained" color="primary">
        Submit
      </Button> */}
            </Grid>
            
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          
        </CardActions>
        
      </Card>
      </div>
    </form>


    </div>
  );
};

