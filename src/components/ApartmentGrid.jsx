import CardList from "./common/CardList";
import { layouts } from "../data/data";


export default function ApartmentGrid({towerId, floorId}) {
  const apartments = layouts[towerId]?.[floorId] || [];
  const handleApartmentDetails = apartment => {
    console.log("Selected Tower:", apartment);
  }

  return (
    <div>
      <CardList 
        data={apartments}
        onSelect={handleApartmentDetails} />
    </div>
  )
}
