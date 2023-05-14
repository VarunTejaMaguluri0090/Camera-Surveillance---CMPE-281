import { Delete, Http } from "@material-ui/icons";
import "./manageProfile.css"
// import { DataGrid } from '@material-ui/data-grid'
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import {Link} from "react-router-dom";
import {Profilerows} from "./profileDummyData"
import { useState, useEffect } from "react";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ManageProfileFeaturedInfo } from "../../pages/manageProfile/ManageProfileFeaturedInfo";


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


export default function ProfilePage() {


    //const [data, setData] = useState(Profilerows);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [alertsPerPage] = useState(5); // Change this value to adjust the number of alerts per page
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    
    async function handleDateRangeChange(start, end) {
        setStartDate(start);
        setEndDate(end);
        // axios.get(`http://127.0.0.1:3002/alerts?startDate=${new Date(startDate).toISOString()}&endDate=${new Date(endDate).toISOString()}`)
        // .then(response => response.json())
        // .then(data => setData(data))
        // .catch(error => console.error(error));
      }
    

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
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Name', width: 200, type:'number' },
        { field: 'age', headerName: 'Age', width: 200 },
        { field: 'Persona', headerName: 'Persona', width: 250 },
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
             <ManageProfileFeaturedInfo />
             <DateRangePicker onChange={handleDateRangeChange} />
            <div class="headRow">
                <h2 className="heading-main">Users</h2>
                <Link to ={"/manageProfile/new"}>
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
                rows={data} disableSelectionOnClick
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection

                getRowClassName={(params) =>
                  params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                }
            />
        </div>
    
  );
}
