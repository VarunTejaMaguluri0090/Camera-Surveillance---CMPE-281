import { Delete, Http } from "@material-ui/icons";
import "./maintainance.css"
import { DataGrid } from '@material-ui/data-grid'
import {Link} from "react-router-dom";
import {Maintainancerows} from "../../dummyData"
import axios from 'axios';
import { useState, useEffect } from "react";
import { async } from "q";

export default function MaintainancePage() {

    // We are going to use useState hook to delete the data, it takes 2 params, initial state = data = Maaintainance data and 
    // set it to setData = final state, so here when we go and click on the delete logo it take it and pass it to the 
    // onClick function. The onClick function will take it and get us the id to be Deleted, once we know the id
    // we will give it to the deleteFucntion which will take the data and filter it via data.filter and return all those 
    // rows w/o that id in it. 
    // Once we get that the setState would set the final state and re-render the UI with the new table, i.e a
    // table w/o the row in it.

    

    const [data, setData] = useState([]);
    async function getAllData(){
        const result = await axios.get("http://127.0.0.1:3002/maintainancePage/")
        console.log(result)
        setData(result.data)
    }
    
    useEffect(()=>{
        getAllData()
    },[])
    
    //delete is an onclick fn so not inside asyn as above, write a separate asyn fn and then call it 
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
        <div className="maintainancePage" align = "center">
            Maintainance Page
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
