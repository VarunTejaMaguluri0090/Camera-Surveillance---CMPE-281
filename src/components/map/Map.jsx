
import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import './map.css'


const containerStyle = {
  width: '1000px',
  height: '500px',
  top: '20px',
  bottom: '60px'

};

const center = {
  lat: 37.335187,
  lng: -121.881072
};


export default function Map() {
    


    return (
        <div className="Chart">
            <h3 className="Title">
                Camera Map View
            </h3>
        <LoadScript
googleMapsApiKey="AIzaSyB5PQAm_NkqjjKB-z8PJ16zVL08j0020us">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={16}
                >
                    <Marker key="marker1"

                        position={{
                            lat: 37.335187,

                            lng: -121.881072
                        }} />


                </GoogleMap>
            </LoadScript>
            
         </div> 
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