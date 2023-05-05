import { Delete, Http } from "@material-ui/icons";
import "./manageProfile.css"
import { DataGrid } from '@material-ui/data-grid'
import {Link} from "react-router-dom";
import {Profilerows} from "./profileDummyData"
import { useState, useEffect } from "react";
import axios from 'axios';


export default function ProfilePage() {


    //const [data, setData] = useState(Profilerows);
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllData()
      }, []);

    async function getAllData(){
        await axios.get("http://127.0.0.1:3002/manageProfile/").then((res) => {
        setData(res.data);
        console.log(res.data)
      })
    }

    async function detelewait(id){
        await axios.delete(`http://127.0.0.1:3002/manageProfile/${id}`)
    }

    const deleteFunction = (id) =>{
        detelewait(id)
        getAllData()
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
        <div className="profilePage" >
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
