import { Delete, Http } from "@material-ui/icons";
import "./viewCameras.css"
import { alpha, styled } from '@mui/material/styles';
// import { DataGrid , gridClasses } from '@material-ui/data-grid'
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import {Link} from "react-router-dom";
import {Maintainancerows} from "../../dummyData"
import axios from 'axios';
import { useState, useEffect } from "react";
import { async } from "q";
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CameraFeaturedInfo } from "../../pages/ViewCameras/CameraFeaturedInfo";

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));


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


    const [data, setData] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // const data = [
    //   {
    //     id: '5e887ac47eed253', 
    //     camera_number: 1,
    //     camera_location: "2nd Floor",
    //     status: 'Active',
         
    //   },
    //   {
    //     id: '4fgtfac47eed253', 
    //     camera_number: 2,
    //     camera_location: "2nd Floor",
    //     status: 'Active',
         
    //   },
    //   {
    //     id: '2qrt5ac47eed2530', 
    //     camera_number: 3,
    //     camera_location: "1st Floor",
    //     status: 'Active',
         
    //   },
    //   {
    //     id: '7yew9ac47eed2530', 
    //     camera_number: 4,
    //     camera_location: "2nd Floor",
    //     status: 'Active',
         
    //   },
    //   {
    //     id: 'z12weac47eed253091', 
    //     camera_number: 5,
    //     camera_location: "1st Floor",
    //     status: 'In Active',
         
    //   },
    //   {
    //     id: '1cvg5ac47eed253091', 
    //     camera_number: 6,
    //     camera_location: "2nd Floor",
    //     status: 'Active',
         
    //   },
    //   {
    //     id: 'f9uf6ac47eed253091', 
    //     camera_number: 7,
    //     camera_location: "3rd Floor",
    //     status: 'In Active',
         
    //   },
    //   {
    //     id: 'm6gt8ac47eed2530', 
    //     camera_number: 8,
    //     camera_location: "2nd Floor",
    //     status: 'Active',
         
    //   },
    //   {
    //     id: 'a2ed9ac47eed2530', 
    //     camera_number: 9,
    //     camera_location: "1st Floor",
    //     status: 'Active',
         
    //   },
    //   {
    //     id: 'n0fhrac47eed253091', 
    //     camera_number: 10,
    //     camera_location: "2nd Floor",
    //     status: 'Active',
         
    //   }
      
    // ];

    async function deletewait(id){
      await axios.delete(`http://127.0.0.1:3002/viewCameras/${id}`)
  }

  async function getAllData(){
      await axios.get(`http://127.0.0.1:3002/viewCameras`).then((res)=>{
          setData(res.data)
      })
  }

  async function handleDateRangeChange(start, end) {
    setStartDate(start);
    setEndDate(end);
    // axios.get(`http://127.0.0.1:3002/alerts?startDate=${new Date(startDate).toISOString()}&endDate=${new Date(endDate).toISOString()}`)
    // .then(response => response.json())
    // .then(data => setData(data))
    // .catch(error => console.error(error));
  }

  const deleteFunction = (id) =>{
      deletewait(id)
      getAllData()
  }

  function DateRangePicker({ onChange }) {
    // const [startDate, setStartDate] = useState(null);
    // const [endDate, setEndDate] = useState(null);
  
    function handleStartDateChange(date) {
      setStartDate(date);
      if (endDate && date < endDate) {
        onChange(date, endDate);
      }
    }
  
    function handleEndDateChange(date) {
      setEndDate(date);
      if (startDate && date > startDate) {
        onChange(startDate, date);
      }
    }
  
    return (
     
      <div class="date">
      <div>
        <label class="date_correction">Start Date:</label>
        <input type="date" value={startDate} onChange={e => handleStartDateChange(e.target.value)} class="field_correction"/>
        <label class="date_correction">End Date:</label>
        <input type="date" value={endDate} onChange={e => handleEndDateChange(e.target.value)} class="field_correction"/>
      </div>
      </div>
    );
  }
    
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

                  {/* <Link to={"/viewCameraStream"+ params.row.id}>
                    <button className="ViewButtonForCamera">View</button>


                  </Link> */}
                  <Link to={"/viewCameraStream" + params.row.id}>
                    <button className="EditButton">Edit</button>
                  </Link>
                  {/* <Link to={"" + params.row.id}>
                    <button className="RemoveButtonForCamera">Remove</button>
                  </Link> */}

<Delete className="DeleteButton" onClick= {()=>{ deleteFunction(params.row.id)}}/>
                  {/* <Delete className="DeleteButton" onClick= {()=>{ deleteFunction(params.row.id)}}/> */}
                </div>
            )
        } 
        },
      ];

     
  
        
    
    return (
     
        <div className="viewCamerasPage"  >
           <CameraFeaturedInfo />
           <DateRangePicker onChange={handleDateRangeChange} />
           <div class="headRow">
                <h2 className="heading-main">View Cameras</h2>
                
                <Link to ={"/viewCameras/new"}>
                    <button className="EditButton">Create</button>
                </Link>
            </div>
            
            <StripedDataGrid 
            sx={{
              "& .MuiDataGrid-row": {
                border: "1px solid lightgray",
                borderRadius: "10px",
                backgroundColor: "white",
                width: "calc(100% - 2px)",
                height:"0.5px",
                marginTop: 2,
      
              },
            }}
            columns={columns}
            rows={data} disableSelectionOnClick
                
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                getRowClassName={(params) =>
                  params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                }
            />
        </div>
    
  );
}

