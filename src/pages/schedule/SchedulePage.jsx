import { Delete, Http } from "@material-ui/icons";
import "./schedule.css"
import { DataGrid } from '@material-ui/data-grid'
import {Link} from "react-router-dom";
import {Schedulerows} from "./scheduleDummyData"
import { useState } from "react";

export default function MaintainancePage() {


    const [data, setData] = useState(Schedulerows);
    
    
    
    async function detelewait(id){
        // await axios.delete(`http://127.0.0.1:3002/maintainancePage/${id}`)
    }

    const deleteFunction = (id) =>{
        
    }


    const columns =[
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'CameraNumber', headerName: 'Camera Number', width: 350, type:'number' },
        { field: 'ScheduleDate', headerName: 'Schedule Date', width: 250 },
        { field: 'Status', headerName: 'Status', width: 150 },
        { field: 'Action', 
        headerName: 'Action', 
        width: 200,
        // We are passing parameters here to the row like for each row we need to render the edit and delete option. 
        renderCell: (params) =>{
            return(
                <div>
                <Link to ={"/schedule/"+ params.row.id}>
                    <button className="EditButton">Edit</button>
                </Link>
                <Delete className="DeleteButton" onClick= {()=>{ deleteFunction(params.row.id)}}/>
                </div>
            )
        } 
        },
      ];

     

    return (
        <div className="schedulePage" align = "center">
            <div class="headRow">
                <h2>Schedule Requests</h2>
                <Link to ={"/schedule/new"}>
                    <button className="EditButton">Create</button>
                </Link>
            </div>
            
            <DataGrid
                rows={data} disableSelectionOnClick
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    
  );
}
