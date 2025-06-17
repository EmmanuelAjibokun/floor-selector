import CardList from "./common/CardList";
import { towers } from "../data/data";
import { useNavigate } from "react-router-dom";


export default function TowerOverview() {
  const navigate = useNavigate();
  const handleSelectTower = tower => {
    console.log("Selected Tower:", tower);
    // Here you can implement further actions like navigating to a detailed view
    navigate(`/tower/${tower.id}`);
  }

  return (
    <div>
      <CardList 
        data={towers}
        onSelect={handleSelectTower} />
    </div>
  )
}
