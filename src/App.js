import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/sideBar/SideBar";
import Home from "./pages/home/Home"
import ViewCameras from "./pages/ViewCameras/viewCameras"
import ViewCameraStream from "./pages/ViewCameras/viewCameraStream"
import ViewCameraStreamVideo from "./pages/ViewCameras/viewCameraStreamVideo"
import ViewCameraFootage from "./pages/ViewCameras/viewCameraFootage"
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MaintainancePage from "./pages/maintainancePage/MaintainancePage";
import MaintainanceUpdate from "./pages/maintainanceUpdate/MaintainanceUpdate";
import LoginScreen from "./pages/login/login";
import Alert from "./pages/alert/Alert";
import React from 'react'
import ReactDOM from 'react-dom'
import ReportPage from "./pages/report/reportPage";
import MaintainanceNew from './pages/maintainancePage/MaintainanceNew';
import SchedulePage from './pages/schedule/SchedulePage';
import ScheduleUpdate from './pages/schedule/ScheduleUpdate';
import ScheduleNew from './pages/schedule/ScheduleNew';
import ManageProfile from './pages/manageProfile/ManageProfile'
import ManageProfileEdit from './pages/manageProfile/ManageProfileEdit'
import ManageProfileCreate from './pages/manageProfile/ManageProfileCreate'


function App() {
  return (
    <Router>
       <TopBar />
     
        <div className = "container">   

         <Routes>
           <Route exact path="/login" element={<LoginScreen/>} />
          </Routes> 

          <SideBar />
          
          <Routes>
           <Route exact path="/home" element={<Home/>} />
          </Routes>
          
          <Routes>
            <Route path="/maintain" element={<MaintainancePage/>} />
           <Route path="/maintain/new" element={<MaintainanceNew/>} />
           <Route path="/maintain/:id" element={<MaintainanceUpdate/>} />

           <Route path="/schedule" element={<SchedulePage/>} />
           <Route path="/schedule/:id" element={<ScheduleUpdate/>} />
           <Route path="/schedule/new" element={<ScheduleNew/>} />

           <Route path="/manageProfile" element={<ManageProfile/>} />
           <Route path="/manageProfile/new" element={<ManageProfileCreate/>} />
           <Route path="/manageProfile/:id" element={<ManageProfileEdit/>} />
            
          </Routes>

         
          <Routes>
           <Route exact path="/viewCameras" element={<ViewCameras/>} />
          </Routes>

          <Routes>
            
           <Route exact path="/viewCameraStream" element={<ViewCameraStream/>} />
          </Routes>


          <Routes>
           <Route exact path="/viewCameraFootage" element={<ViewCameraFootage/>} />
          </Routes>

          <Routes>
           <Route exact path="/alert" element={<Alert/>} />
          </Routes>

          <Routes>
           <Route exact path="/report" element={<ReportPage/>} />
          </Routes>

        </div>  
    </Router>
     
  );
}

export default App;
