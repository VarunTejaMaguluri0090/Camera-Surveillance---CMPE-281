import { useCallback, useState } from 'react';
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
      <Card >
        <CardHeader align="center"
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
                <TextField
                  fullWidth
                  helperText=""
                  label="Camera ID"
                  name="cameraId"
                  // onChange={handleChange}
                  
                  value={"65rhhjkjgdfd644rchh66"}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Camera Location"
                  name="cameraLocation"
                  // onChange={handleChange}
                  
                  value={"Engg. Building, 2nd Floor"}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Camera Number"
                  name="cameraNumber"
                  onChange={handleChange}
                  
                  value={"Camera 7"}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Status"
                  name="status"
                  onChange={handleChange}
                  
                  value={"Active"}
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
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          
        </CardActions>
      </Card>
    </form>


    </div>
  );
};

