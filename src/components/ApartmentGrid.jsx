import CardList from "./common/CardList";
import { layouts } from "../data/data";
import ApartmentDetail from "./ApartmentDetail";

import { useState } from "react";


export default function ApartmentGrid({towerId, floorId}) {
  const apartments = layouts[towerId]?.[floorId] || [];
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleApartmentDetails = apartment => {
    console.log("Selected Tower:", apartment);
    setSelectedApartment(apartment);
    setShowDetails(true);
  }

  return (
    <div>
      <CardList 
        data={apartments}
        onSelect={handleApartmentDetails}
      />
      {showDetails && selectedApartment && (
        <ApartmentDetail
          apartment={selectedApartment}
          apartments={apartments}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  )
}
