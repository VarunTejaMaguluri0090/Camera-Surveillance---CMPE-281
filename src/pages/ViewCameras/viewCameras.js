import { Delete, Http } from "@material-ui/icons";
import "./viewCameras.css"
import { DataGrid } from '@material-ui/data-grid'
import {Link} from "react-router-dom";
import {Maintainancerows} from "../../dummyData"
import axios from 'axios';
import { useState, useEffect } from "react";
import { async } from "q";
import React from 'react';

// Your code using JSX

export default function ViewCameras() {

    // We are going to use useState hook to delete the data, it takes 2 params, initial state = data = Maaintainance data and 
    // set it to setData = final state, so here when we go and click on the delete logo it take it and pass it to the 
    // onClick function. The onClick function will take it and get us the id to be Deleted, once we know the id
    // we will give it to the deleteFucntion which will take the data and filter it via data.filter and return all those 
    // rows w/o that id in it. 
    // Once we get that the setState would set the final state and re-render the UI with the new table, i.e a
    // table w/o the row in it.

    

    // const [data, setData] = useState([]);
    // async function getAllData(){
    //     const result = await axios.get("http://127.0.0.1:3002/viewCamerasPage/")
    //     console.log(result)
    //     setData(result.data)
    // }
    
    // useEffect(()=>{
    //     getAllData()
    // },[])
    
    //delete is an onclick fn so not inside asyn as above, write a separate asyn fn and then call it 
    // async function detelewait(id){
    //     await axios.delete(`http://127.0.0.1:3002/viewCamerasPage/${id}`)
    // }

    // const deleteFunction = (id) =>{
    //     detelewait(id)
    //     getAllData()
    // }

    const data = [
      {
        id: '5e887ac47eed253', 
        camera_number: 1,
        camera_location: "2nd Floor",
        status: 'Active',
         
      },
      {
        id: '4fgtfac47eed253', 
        camera_number: 2,
        camera_location: "2nd Floor",
        status: 'Active',
         
      },
      {
        id: '2qrt5ac47eed2530', 
        camera_number: 3,
        camera_location: "1st Floor",
        status: 'Active',
         
      },
      {
        id: '7yew9ac47eed2530', 
        camera_number: 4,
        camera_location: "2nd Floor",
        status: 'Active',
         
      },
      {
        id: 'z12weac47eed253091', 
        camera_number: 5,
        camera_location: "1st Floor",
        status: 'In Active',
         
      },
      {
        id: '1cvg5ac47eed253091', 
        camera_number: 6,
        camera_location: "2nd Floor",
        status: 'Active',
         
      },
      {
        id: 'f9uf6ac47eed253091', 
        camera_number: 7,
        camera_location: "3rd Floor",
        status: 'In Active',
         
      },
      {
        id: 'm6gt8ac47eed2530', 
        camera_number: 8,
        camera_location: "2nd Floor",
        status: 'Active',
         
      },
      {
        id: 'a2ed9ac47eed2530', 
        camera_number: 9,
        camera_location: "1st Floor",
        status: 'Active',
         
      },
      {
        id: 'n0fhrac47eed253091', 
        camera_number: 10,
        camera_location: "2nd Floor",
        status: 'Active',
         
      }
      
    ];
    
    const columns =[
      { field: 'id', headerName: 'ID', width: 200 },
        { field: 'camera_number', headerName: 'CAMERA NUMBER', width: 200, type:'number' },
        { field: 'camera_location', headerName: 'CAMERA LOCATION', width: 250 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'Action', 
        headerName: 'Action', 
        width: 250,

        // We are passing parameters here to the row like for each row we need to render the edit and delete option. 
        renderCell: (params) =>{
            return(
                <div>
                <Link to ={"/viewCameraStream"}>
                <button className="ViewButtonForCamera">View</button>
               
                
                </Link>
                <Link to ={""+ params.row.id}>
                <button className="EditButtonForCamera">Edit</button>
                </Link>
                <Link to ={""+ params.row.id}>
                <button className="RemoveButtonForCamera">Remove</button>
                </Link>
                {/* <Delete className="DeleteButton" onClick= {()=>{ deleteFunction(params.row.id)}}/> */}
                </div>
            )
        } 
        },
      ];

     
  
        
    
    return (
      
        <div className="viewCamerasPage"  >
            View Cameras
            <DataGrid
            columns={columns}
            rows={data} disableSelectionOnClick
                
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    
  );
}
