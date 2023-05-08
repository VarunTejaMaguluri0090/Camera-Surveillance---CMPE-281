import "./SideBar.css"
import { Link } from "react-router-dom";
import {LineStyle, Assessment, Add, Remove, Update, LocalSee, PriorityHigh, Build, Map, Schedule, Person, ViewAgenda, CameraAltRounded, VideoLabel, RemoveCircleOutline} from "@material-ui/icons"
export default function SideBar() {
  return (

      <div class="sidebar">
         <h3 className="sideBarTitle">Dashboard</h3>
          <a href="/home">Home</a>
          <a href="/report">Reports</a>
          <a href="/alert">Alerts</a>
          <a href="/alertAnalysis">Alert Analysis </a>
          <a href="/alertmapview">Alert Map View </a>

      </div>

  );
}
