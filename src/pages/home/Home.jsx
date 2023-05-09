import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
// import Map from "./components/map/Map";
import Map from "../../components/map/Map"; // import the map here

import "./home.css"

export default function Home() {

  return (
    <div className="Home">
      <FeaturedInfo />
      <Map /> 
      {/* <Chart /> */}
    </div>
  );
}
