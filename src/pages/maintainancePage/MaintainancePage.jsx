import { Delete, Http } from "@material-ui/icons";
import "./maintainance.css"
import { DataGrid } from '@material-ui/data-grid'
import {Link} from "react-router-dom";
import {Maintainancerows} from "../../dummyData"
import axios from 'axios';
import { useState, useEffect } from "react";
import { async } from "q";

export default function MaintainancePage() {


    //useState -> data is a variable and setData is a fucntion. Need to set tha data that we recieved in response
    //to setData via useEffect
    const [data, setData] = useState([]);
    
    //getAllData is to be rendered only for the first time when the page loads up
    useEffect(() => {
      getAllData()
    }, []);

    //axios.get -> postman API call
    //.then is a JS function, returns a promise
    //getting a object(res) and extract res.data from it and set it to data
    async function getAllData(){
        await axios.get("http://127.0.0.1:3002/maintainancePage/").then((res) => {
        setData(res.data);
      })
    }

    //delete is an onclick fn so not inside asyn as above, write a separate asyn fn and then call it 
    // we don't need a deleted response here as we are not going to do anything with it, just render getAllData() post deleting
    async function detelewait(id){
        await axios.delete(`http://127.0.0.1:3002/maintainancePage/${id}`)
    }

    const deleteFunction = (id) =>{
        detelewait(id)
        getAllData()
    }


    const columns =[
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'date', headerName: 'Date', width: 150, type:'number' },
        { field: 'reason', headerName: 'Reason', width: 250 },
        { field: 'status', headerName: 'Status', width: 150 },
        {
          field: 'location',
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
