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
import AlertAnalysis from "./pages/alert/alertAnalysis";

import React from 'react';
import ReactDOM from 'react-dom';
import ReportPage from "./pages/report/reportPage";
import MaintainanceNew from './pages/maintainancePage/MaintainanceNew';
import SchedulePage from './pages/schedule/SchedulePage';
import ScheduleUpdate from './pages/schedule/ScheduleUpdate';
import ScheduleNew from './pages/schedule/ScheduleNew';
import ManageProfile from './pages/manageProfile/ManageProfile'
import ManageProfileEdit from './pages/manageProfile/ManageProfileEdit'
import ManageProfileCreate from './pages/manageProfile/ManageProfileCreate'
import 'react-datepicker/dist/react-datepicker.css';
// import AlertViewTest1 from "./pages/alertsViewTest/alertViewTest1";



function App() {
  const userToken = localStorage.getItem('userToken');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            userToken ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
        <Route exact path="/login" element={<LoginScreen />} />
      </Routes>
      <TopBar />

      <div className="container">

        <SideBar />

        <Routes>
          <Route exact path="/home" element={<Home />} />
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
