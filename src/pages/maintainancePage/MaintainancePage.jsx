import { Delete, Http } from "@material-ui/icons";
import "./maintainance.css"
import { DataGrid } from '@material-ui/data-grid'
import {Link} from "react-router-dom";
import {Maintainancerows} from "../../dummyData"
import axios from 'axios';
import { useState, useEffect } from "react";
import { async } from "q";

export default function MaintainancePage() {


    const [data, setData] = useState(Maintainancerows);
    
    
    //delete is an onclick fn so not inside asyn as above, write a separate asyn fn and then call it 
    async function detelewait(id){
        // await axios.delete(`http://127.0.0.1:3002/maintainancePage/${id}`)
    }

    const deleteFunction = (id) =>{
        // detelewait(id)
        // getAllData()
    }


    const columns =[
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'Date', headerName: 'Date', width: 150, type:'number' },
        { field: 'Reason', headerName: 'Reason', width: 250 },
        { field: 'Status', headerName: 'Status', width: 150 },
        {
          field: 'Location',
          headerName: 'Location',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 200,
        },
        { field: 'Action', 
        headerName: 'Action', 
        width: 200,

        // We are passing parameters here to the row like for each row we need to render the edit and delete option. 
        renderCell: (params) =>{
            return(
                <div>
                <Link to ={"/maintain/"+ params.row.id}>
                    <button className="EditButton">Edit</button>
                </Link>
                <Delete className="DeleteButton" onClick= {()=>{ deleteFunction(params.row.id)}}/>
                </div>
            )
        } 
        },
      ];

     

    return (
        <div className="maintainancePage" >
            <div class="headRow">
                <h2>Maintainance Requests</h2>
                <Link to ={"/maintain/new"}>
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
