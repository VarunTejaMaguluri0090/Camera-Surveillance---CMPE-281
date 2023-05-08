import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import Map from "../../components/map/Map";
import "./home.css"
import TopBarMaintain from "../../components/topBar/TopBarMaintain";
import SideBarMaintain from "../../components/sideBar/SideBarMaintain";

export default function HomeMaintain() {
  return (
    <div className="Home">
      <FeaturedInfo />
      <Map />
      <Chart />
    </div>
  );
}
