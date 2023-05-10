import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/sideBar/SideBar";
import Home from "./pages/home/Home"
import ViewCameras from "./pages/ViewCameras/viewCameras"
import ViewCameraStream from "./pages/ViewCameras/viewCameraStream"
import ViewCameraStreamVideo from "./pages/ViewCameras/viewCameraStreamVideo"
import ViewCameraFootage from "./pages/ViewCameras/viewCameraFootage"
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import MaintainancePage from "./pages/maintainancePage/MaintainancePage";
import MaintainanceUpdate from "./pages/maintainanceUpdate/MaintainanceUpdate";
import LoginScreen from "./pages/login/login";
import Alert from "./pages/alert/Alert";
import AlertMapView from "./pages/alertMapView/alertMapView";
import AlertView from "./pages/alertView/AlertView";
import CameraDisplayView from "./pages/cameraDisplayView/CameraDisplayView";
import AlertAnalysis from "./pages/alert/alertAnalysis";
import { useState, useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import ReportPage from "./pages/report/reportPage";
import MaintainanceNew from './pages/maintainancePage/MaintainanceNew';
import SchedulePage from './pages/schedule/SchedulePage';
import ScheduleUpdate from './pages/schedule/ScheduleUpdate';
import ScheduleNew from './pages/schedule/ScheduleNew';
import NewCamera from './pages/ViewCameras/NewCamera';
import ManageProfile from './pages/manageProfile/ManageProfile'
import ManageProfileEdit from './pages/manageProfile/ManageProfileEdit'
import ManageProfileCreate from './pages/manageProfile/ManageProfileCreate'
import 'react-datepicker/dist/react-datepicker.css';
import HomeMaintain from "./pages/home/HomeMaintain";
import TopBarMaintain from "./components/topBar/TopBarMaintain";
import TopBarUser from "./components/topBar/TopBarUser";
import SideBarMaintain from "./components/sideBar/SideBarMaintain";
import SideBarUser from "./components/sideBar/SideBarUser";
// import AlertViewTest1 from "./pages/alertsViewTest/alertViewTest1";



function App() {
  const [isMaintain, setIsMaintain] = useState(localStorage.getItem('isMaintainace'));
  const [userToken, setUserToken] = useState(localStorage.getItem('userToken'));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'));

  // const [role, setRole] = useState("user");

  useEffect(() => {
    if (userToken) {
      document.body.className = ""
    } else {
      document.body.className = "no-scroll"
    }
  }, [userToken]);


  function renderTopBar () {
    if (isMaintain == 1) {
      return <TopBarMaintain user={setUserToken}/>
    } else if (isAdmin == 1) {
      return <TopBar user={setUserToken}/>
    } else {
      return <TopBarUser user={setUserToken}/>
    }
  }

  function renderSideBar () {
    if (isMaintain == 1) {
      return <SideBarMaintain />
    } else if (isAdmin == 1) { 
      return <SideBar />
    } else {
      return <SideBarUser />
    }
  }

  return (
    <Router>

      <Routes>
        <Route
          path="/"
          element={
            userToken ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
        <Route exact path="/login" element={<LoginScreen maintain={setIsMaintain} admin={setIsAdmin} user={setUserToken}/>} />
      </Routes>
      
      {renderTopBar()}
      
      {/* {isMaintain == 1 ? <TopBarMaintain /> : <TopBar /> }  */}
      <div className="container">

        {/* <SideBar /> */}

        {renderSideBar()}

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/maintainhome" element={<HomeMaintain />} />
        </Routes>

        <Routes>
          <Route path="/maintain" element={<MaintainancePage />} />
          <Route path="/maintain/new" element={<MaintainanceNew />} />
          <Route path="/maintain/:id" element={<MaintainanceUpdate />} />

          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/schedule/:id" element={<ScheduleUpdate />} />
          <Route path="/schedule/new" element={<ScheduleNew />} />

          <Route path="/manageProfile" element={<ManageProfile />} />
          <Route path="/manageProfile/new" element={<ManageProfileCreate />} />
          <Route path="/manageProfile/:id" element={<ManageProfileEdit />} />
        </Routes>

        <Routes>
          <Route exact path="/viewCameras" element={<ViewCameras />} />
          <Route path="/viewCameras/new" element={<NewCamera />} />
          <Route exact path="/cameraDisplayView/:id" element={<CameraDisplayView />} />
        </Routes>

        <Routes>
          <Route
            exact
            path="/viewCameraStream"
            element={<ViewCameraStream />}
          />
        </Routes>

        <Routes>
          <Route
            exact
            path="/viewCameraFootage"
            element={<ViewCameraFootage />}
          />
        </Routes>

        <Routes>
          <Route exact path="/alert" element={<Alert />} />
          <Route exact path="/alertMapView" element={<AlertMapView />} />
          <Route exact path="/alerts/:id" element={<AlertView />} />
          <Route exact path="/AlertAnalysis" element={<AlertAnalysis />} />
          {/* <Route exact path="/alertViewTest1" element={<AlertViewTest1/>} /> */}
        </Routes>

        <Routes>
          <Route exact path="/report" element={<ReportPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
