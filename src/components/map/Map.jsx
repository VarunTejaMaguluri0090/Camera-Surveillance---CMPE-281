
import React, { Component,useState, useEffect  } from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import './Map.css'
import mapImage from "./map.png"
import greenIcon from "./green.png"
import redIcon from "./red.png"
import yellowIcon from "./yellow.png"
import { Link } from 'react-router-dom';


const containerStyle = {
  width: '100px',
  height: '500px',
  top: '20px',
  bottom: '60px'

};

const center = {
  lat: 37.335187,
  lng: -121.881072
};

const Alert = ({ alertId, x, y, title }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    
    <Link key={alertId} to={`/cameraDisplayView/${alertId}`} 
    
      style={{
        position: 'absolute',
        left: x,
        top: y,
        padding: '10px',
        borderRadius: '5px',
        display: isVisible ? 'block' : 'none',
        
      }}
    >
     <img src={greenIcon} title={title}/>
     
    </Link>
  );
};

const Alert1 = ({ alertId, x, y, title }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <Link key={alertId} to={`/cameraDisplayView/${alertId}`} className="alert"
    style={{
      position: 'absolute',
      left: x,
      top: y,
      padding: '10px',
      borderRadius: '5px',
      display: isVisible ? 'block' : 'none',
    }}
  >
   <img src={redIcon} title={title} />
    </Link>
  );
};

const Alert2 = ({ alertId, x, y, title }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <Link key={alertId} to={`/cameraDisplayView/${alertId}`} className="alert"
    style={{
      position: 'absolute',
      left: x,
      top: y,
      padding: '10px',
      borderRadius: '5px',
      display: isVisible ? 'block' : 'none',
    }}
  >
   <img src={yellowIcon} title={title} />
    </Link>
  );
};


export default function Map() {
  const [alerts, setAlerts] = useState([]);
  const [alerts1, setAlerts1] = useState([]);
  const [alerts2, setAlerts2] = useState([]);
  useEffect(() => {
    // Load alerts
    fetch('/alerts.json')
      .then(response => response.json())
      .then(data => setAlerts(data.alerts))
      .catch(error => console.error(error));
      setAlerts([
            {
              "id": 1,

              "title": "Cam2",
              "x": 300,
              "y": 520
            },
            {
              "id": 2,
              "title": "Cam4",
              "x": 405,
              "y": 330
            },
            {
              "id": 3,
              "title": "Cam6",
              "x": 500,
              "y": 250
            },
            {
              "id": 4,
              "title": "Cam8",
              "x": 570,
              "y": 290
            },{
              "id": 5,
              "title": "Cam10",
              "x": 650,
              "y": 320
            },{
              "id": 6,
              "title": "Cam14",
              "x": 290,
              "y": 400
            },{
              "id": 7,
              "title": "Cam17",
              "x": 620,
              "y": 410
            },{
              "id": 8,
              "title": "Cam18",
              "x": 280,
              "y": 320
            },{
              "id": 9,
              "title": "Cam19",
              "x": 800,
              "y": 310
            },{
              "id": 10,
              "title": "Cam21",
              "x": 190,
              "y": 560
            }
          ])
        console.log("@@@set alerts")
  }, []);

  useEffect(() => {
    // Load alerts
    fetch('/alerts.json')
      .then(response => response.json())
      .then(data => setAlerts1(data.alerts1))
      .catch(error => console.error(error));
      setAlerts1([
            {
              "id": 11,
              "title": "Cam1",
              "x": 200,
              "y": 290
            },
            {
              "id": 12,
              "title": "Cam3",
              "x": 250,
              "y": 240
            },
            {
              "id": 13,
              "title": "Cam5",
              "x": 600,
              "y": 200
            },
            {
              "id": 14,
              "title": "Cam7",
              "x": 500,
              "y": 250
            },{
              "id": 15,
              "title": "Cam9",
              "x": 490,
              "y": 150
            },{
              "id": 16,
              "title": "Cam11",
              "x": 170,
              "y": 350
            },{
              "id": 17,
              "title": "Cam12",
              "x": 600,
              "y": 490
            },{
              "id": 18,
              "title": "Cam16",
              "x": 400,
              "y": 450
            },{
              "id": 19,
              "title": "Cam13",
              "x": 400,
              "y": 240
            },{
              "id": 20,
              "title": "Cam15",
              "x": 150,
              "y": 500
            }
          ])
        console.log("@@@set alerts")
  }, []);

  useEffect(() => {
    // Load alerts
    fetch('/alerts.json')
      .then(response => response.json())
      .then(data => setAlerts2(data.alerts2))
      .catch(error => console.error(error));
      setAlerts2([
            {
              "id": 21,
              "title": "Cam20",
              "x": 100,
              "y": 290
            },
            {
              "id": 22,
              "title": "Cam22",
              "x": 250,
              "y": 240
            },
            {
              "id": 23,
              "title": "Cam23",
              "x": 600,
              "y": 200
            },
            
          ])
        console.log("@@@set alerts")
  }, []);

    return (
      <div class="item">
       <h2 className="heading-main">Camera Map View</h2>
      <img src={mapImage}/>
      {alerts.map(alert => (
        <Alert alertId={alert.id} x={alert.x} y={alert.y} title={alert.title} />
      ))}
      {alerts1.map(alert1 => (
        <Alert1 alertId={alert1.id} x={alert1.x} y={alert1.y} title={alert1.title} />
      ))}

{alerts2.map(alert2 => (
        <Alert2 alertId={alert2.id} x={alert2.x} y={alert2.y} title={alert2.title} />
      ))}
      
      </div>
//         {<LoadScript
// googleMapsApiKey="AIzaSyB5PQAm_NkqjjKB-z8PJ16zVL08j0020us">
//                 <GoogleMap
//                     mapContainerStyle={containerStyle}
//                     center={center}
//                     zoom={16}
//                 >
//                     <Marker key="marker1"

//                         position={{
//                             lat: 37.335187,

//                             lng: -121.881072
//                         }} />


//                 </GoogleMap>
//             </LoadScript> 
            
     
    )
  }



// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import React from "react";
// import GoogleMapReact from 'google-map-react';


// export default function Map() {
//     const AnyReactComponent = ({ text }) => <div>{text}</div>;
//     const defaultProps = {
//         center: {
//           lat: 10.99835602,
//           lng: 77.01502627
//         },
//         zoom: 11
//       };
    
//       return (
//         // Important! Always set the container height explicitly
//         <div style={{ height: '100vh', width: '100%' }}>
//           <GoogleMapReact
//             bootstrapURLKeys={{ key: "AIzaSyDkf4Ct9HB83HjZM0Et_X6pNVaBNeADqpc" }}
//             defaultCenter={defaultProps.center}
//             defaultZoom={defaultProps.zoom}
//           >
//             <AnyReactComponent
//               lat={59.955413}
//               lng={30.337844}
//               text="My Marker"
//             />
//           </GoogleMapReact>
//         </div>
//       );
  
// }