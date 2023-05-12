import { Delete, Http } from "@material-ui/icons";
import "./schedule.css"
// import { DataGrid } from '@material-ui/data-grid'
import {Link} from "react-router-dom";
import {Schedulerows} from "./scheduleDummyData"
import { useState, useEffect } from "react";
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ScheduleFeaturedInfo } from "../../pages/schedule/ScheduleFeaturedInfo";


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

//Schedule detele and getAll(Read) is executed



export default function MaintainancePage() {

    
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
    
    async function deletewait(id){
        await axios.delete(`http://127.0.0.1:3002/schedule/${id}`)
    }

    async function getAllData(){
        await axios.get(`http://127.0.0.1:3002/schedule`).then((res)=>{
            setData(res.data)
        })
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


    const dateFormatter = (date) => {
      return date.value.split("T")[0];
    }

    const columns =[
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'camera_number', headerName: 'Camera Number', width: 150, type:'number' },
        { field: 'schedule_date', headerName: 'Schedule Date', width: 100, valueFormatter: dateFormatter },
        { field: 'status', headerName: 'Status', width: 100 },
        { field: 'incharge', headerName: 'Incharge', width: 100 },
        { field: 'type', headerName: 'Type', width: 100 },
        { field: 'details', headerName: 'Details', width: 100 },
        { field: 'location', headerName: 'Location', width: 100 },

        { field: 'Action', 
        headerName: 'Action', 
        width: 150,
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
        <div className="schedulePage" >
             <ScheduleFeaturedInfo />
             {/* <DateRangePicker onChange={handleDateRangeChange} /> */}
            <div class="headRow">
                <h2>Schedule Requests</h2>
                
                <Link to ={"/schedule/new"}>
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
