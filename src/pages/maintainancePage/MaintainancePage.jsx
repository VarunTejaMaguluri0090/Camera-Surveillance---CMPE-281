import { Delete, Http } from "@material-ui/icons";
import "./maintainance.css"
// import { DataGrid } from '@material-ui/data-grid'
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import {Link} from "react-router-dom";
import {Maintainancerows} from "../../dummyData"
import axios from 'axios';
import { useState, useEffect } from "react";
import { async } from "q";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MaintainanceFeaturedInfo } from "../../pages/maintainancePage/MaintainanceFeaturedInfo";


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


export default function MaintainancePage() {


    //useState -> data is a variable and setData is a fucntion. Need to set tha data that we recieved in response
    //to setData via useEffect
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

    const dateFormatter = (date) => {
      return date.value.split("T")[0];
    }

    const columns =[
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'date', headerName: 'Date', width: 150, type:'number', valueFormatter: dateFormatter },
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
             <MaintainanceFeaturedInfo />
             <DateRangePicker onChange={handleDateRangeChange} />
            <div class="headRow">
                <h2 className="heading-main">Maintainance Requests</h2>
                <Link to ={"/maintain/new"}>
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
