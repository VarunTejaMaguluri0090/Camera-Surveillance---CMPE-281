import React, { useState, useEffect } from 'react';
import floorImage from "./floor.jpeg"
import { Link } from 'react-router-dom';

const Alert = ({ alertId, x, y, title }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = (alertId) => {
  };

  return (
    <Link key={alertId} to={`/alerts/${alertId}`} className="alert"
      style={{
        position: 'absolute',
        left: x,
        top: y,
        backgroundColor: 'Red',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display: isVisible ? 'block' : 'none',
      }}
    >
      {title}
    </Link>
  );
};

const Map = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Load alerts
    fetch('/alerts.json')
      .then(response => response.json())
      .then(data => setAlerts(data.alerts))
      .catch(error => console.error(error));
      setAlerts([
            {
              "id": 1,
              "title": "Fire in Building A",
              "x": 100,
              "y": 200
            },
            {
              "id": 2,
              "title": "Gas Leak in Building B",
              "x": 250,
              "y": 150
            },
            {
              "id": 3,
              "title": "Water Leak in Building C",
              "x": 400,
              "y": 300
            }
          ])
        console.log("@@@set alerts")
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <img src={floorImage} alt="Map" style={{ maxWidth: '70%' }} />
      {alerts.map(alert => (
        <Alert alertId={alert.id} x={alert.x} y={alert.y} title={alert.title} />
      ))}
    </div>
  );
};

export default Map;



// // import NavBarLoggedIn from "./Navbar/NavBarLoggedIn"
// import { Container, Row, Col, Card } from "react-bootstrap"
// // import LeftNavBarAdmin from "./admin/LeftNavBarAdmin/LeftNavBarAdmin"
// import axios from "axios"
// import React, { useState } from "react"
// // import NavBarLoggedInAdmin from "./admin/NavbarAdmin/NavBarLoggedInAdmin"
// // import LeftNavBar from "./LeftNavBar/LeftNavBar"
// // import "./AddUser.css"
// import floorImage from "./floor.jpeg"
// import { color } from "@mui/system"
// import "./CampusViewPage.css"
// import { Link } from "react-router-dom"
// import CameraTable from "./CameraTable"

// function FloorMap() {
//   const buildings = [
//     {
//       id: 1,
//       name: "Campus",
//       cameras: [
//         {
//           id: 1,
//           name: "Camera 1",
//           operationStatus: "Online",
//           healthStatus: "Good",
//           location: [15, 30],
//         },
//         {
//           id: 2,
//           name: "Camera 2",
//           operationStatus: "Online",
//           healthStatus: "Excellent",
//           location: [45, 45],
//         },
//         {
//           id: 3,
//           name: "Camera 3",
//           operationStatus: "Offline",
//           healthStatus: "Needs Maintenance",
//           location: [28, 75],
//         },
//         {
//           id: 4,
//           name: "Camera 4",
//           operationStatus: "Online",
//           healthStatus: "Fair",
//           location: [20, 40],
//         },
//         {
//           id: 5,
//           name: "Camera 5",
//           operationStatus: "Offline",
//           healthStatus: "Needs Maintenance",
//           location: [34, 60],
//         },
//         {
//           id: 6,
//           name: "Camera 6",
//           operationStatus: "Online",
//           healthStatus: "Fair",
//           location: [80, 80],
//         },
//         {
//           id: 7,
//           name: "Camera 7",
//           operationStatus: "Offline",
//           healthStatus: "Needs Maintenance",
//           location: [50, 20],
//         },
//         {
//           id: 8,
//           name: "Camera 8",
//           operationStatus: "Online",
//           healthStatus: "Fair",
//           location: [80, 15],
//         },
//       ],
//     },
//   ]

//   const getOperationStatusColor = (status) => {
//     if (status === "Online") {
//       return "success"
//     } else if (status === "Offline") {
//       return "danger"
//     } else {
//       return "warning"
//     }
//   }

//   return (
//     <>
//       {/* <NavBarLoggedInAdmin /> */}
//       <Row>
//         <Col lg={2}>
//         </Col>
//         <Col lg={10} style={{ paddingLeft: 80, paddingRight: 80 }}>
//           <div class='main-body'>
//             <div class='page-wrapper'>
//               <Container style={{ marginLeft: "20px" }}>
//                 <Row>
//                   <Col>
//                     <h1 className='text-center my-5'>Alerts Map</h1>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col sm={200}>
//                     <img
//                       src={floorImage}
//                       style={{ opacity: 0.6 }}
//                       alt='Map'
//                       className='map-image'
//                     />
//                     {buildings.map((building) => (
//                       <div key={building.id} className='building-markers'>
//                         {building.cameras.map((camera) => (
//                           <Link
//                             to='/cameravideo'
//                             key={camera.id}
//                             className={`camera-marker text-${getOperationStatusColor(
//                               camera.operationStatus
//                             )} bg-dark`}
//                             style={{
//                               left: `${camera.location[0]}%`,
//                               top: `${camera.location[1]}%`,
//                             }}
//                           >
//                             {camera.name}
//                           </Link>
//                         ))}
//                       </div>
//                     ))}
                    
//                   </Col>
                  
//                   {/* <Col sm={4}>
//                     {buildings.map((building) => (
//                       <div key={building.id}>
//                         <Card className='building-card'>
//                           <Card.Body style={{ paddingTop: 10 }}>
//                             {building.cameras.map((camera) => (
//                               <Card.Text
//                                 key={camera.id}
//                                 className={`mb-2 text-${getOperationStatusColor(
//                                   camera.operationStatus
//                                 )} bg-dark`}
//                                 id={camera.id}
//                               >
//                                 <strong>{camera.name}</strong>
//                                 <br />
//                                 Operation Status: {camera.operationStatus}
//                                 <br />
//                                 Health Status: {camera.healthStatus}
//                               </Card.Text>
//                             ))}
//                           </Card.Body>
//                         </Card>
//                       </div>
//                     ))}
//                   </Col> */}
//                 </Row>
//                 <CameraTable></CameraTable>
//               </Container>
//             </div>
//           </div>
//         </Col>
       
//       </Row>
//     </>
//   )
// }

// export default FloorMap
