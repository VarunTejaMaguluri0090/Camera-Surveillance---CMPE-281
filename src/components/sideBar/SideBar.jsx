import "./SideBar.css"
import { Link } from "react-router-dom";
import {LineStyle, Assessment, Add, Remove, Update, LocalSee, PriorityHigh, Build, Map, Schedule, Person, ViewAgenda, CameraAltRounded, VideoLabel, RemoveCircleOutline} from "@material-ui/icons"
export default function SideBar() {
  return (

      <><div class="sidebar">
         <h3 className="sideBarTitle">Dashboard</h3>
          <a href="/home">Home</a>
          <a href="/schedule">Schedule</a>
          <a href="/manageProfile">Manage Profile</a>
          <a href="">Map View</a>
          

          <h3 className="sideBarTitle" >Camera</h3>
          <a href="/viewCameras">View Camera</a>
          <a href="/viewCameraFootage">Camera Footage</a>

          

          <h3 className="sideBarTitle">Maintainance</h3>
          <a href="">Reports</a>
          <a href="/alert">Alerts</a>
          <a href="/maintain">Maintainance Requests</a>
          
          
      </div></>

      

    // <div className="sidebar">
    //   <div className="sideBarMenuWrapper"></div>
    //     <div className="sideBarMenu">
    //         <h3 className="sideBarTitle">Dashboard</h3>
    //             <ul className="sidebarList">
                
    //             <a class="active" href="/home"><LineStyle />Home</a>
    //             <a class="active" href=""><Schedule />Schedule</a>
    //             <a class="active" href=""><Person />Manage Profile</a>

    //                 {/* <li className="sidebarListItems">
    //                     <Schedule />
    //                         Schedule
    //                 </li>

    //                 <li className="sidebarListItems">
    //                     <Person />
    //                     Manage Profile
    //                 </li> */}

    //             </ul>
    //     </div>

    //         <h3 className="sideBarTitle">Cameras</h3>
    //         <ul className="sidebarList">
    //             <li className="sidebarListItems">
    //                 <CameraAltRounded />
    //                 View Cameras
    //             </li>

    //             <li className="sidebarListItems">
    //                 <VideoLabel />
    //              Cameras Footage
    //             </li>

    //             <li className="sidebarListItems">
    //                 <RemoveCircleOutline />
    //                 Remove Camera
    //             </li>

                
    //         </ul>

            
    //         <h3 className="sideBarTitle">Notifications</h3>
    //         <ul className="sidebarList">
    //             <li className="sidebarListItems">
    //                 <Assessment />
    //                 Reports
    //             </li>

    //             <li className="sidebarListItems">
    //                 <PriorityHigh />
    //                 Alerts
    //             </li>
                
    //             <Link to ="/maintain">
    //             <li className="sidebarListItems">
    //                 <Build />
    //                 Maintainance Requets
    //             </li>
    //             </Link>

    //             <li className="sidebarListItems">
    //                 <Map />
    //                 Maps
    //             </li>

    //         </ul>



            
          
    // </div>
  );
}
