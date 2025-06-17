import CardList from "./CardList";
import { towers } from "../data/data";


export default function TowerOverview() {

  return (
    <div>
      <CardList data={towers} />
    </div>
  )
}
