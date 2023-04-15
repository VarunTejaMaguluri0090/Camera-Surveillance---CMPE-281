import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import "./home.css"

export default function Home() {
  return (
    <div className="Home">
      <FeaturedInfo />
      <Chart />
    </div>
  );
}

