import { Delete, Http } from "@material-ui/icons";
import "./manageProfile.css"
import { DataGrid } from '@material-ui/data-grid'
import {Link} from "react-router-dom";
import {Profilerows} from "./profileDummyData"
import { useState } from "react";

export default function ProfilePage() {


    const [data, setData] = useState(Profilerows);
    
    async function detelewait(id){

    }

    const deleteFunction = (id) =>{
        
    }


    const columns =[
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Name', width: 350, type:'number' },
        { field: 'age', headerName: 'Age', width: 250 },
        { field: 'Action', 
        headerName: 'Action', 
        width: 200,
        renderCell: (params) =>{
            return(
                <div>
                <Link to ={"/manageProfile/"+ params.row.id}>
                    <button className="EditButton">Edit</button>
                </Link>
                <Delete className="DeleteButton" onClick= {()=>{ deleteFunction(params.row.id)}}/>
                </div>
            )
        } 
        },
      ];

     

    return (
        <div className="profilePage" align = "center">
            <div class="headRow">
                <h2>Users</h2>
                <Link to ={"/manageProfile/new"}>
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
