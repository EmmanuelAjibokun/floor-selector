import CardList from "./common/CardList";
import { floors } from "../data/data";
import Modal from "./common/Modal";
import ApartmentGrid from "./ApartmentGrid";

import { useParams } from "react-router-dom";
import { useState } from "react";

export default function FloorSelector() {
  const {id: towerId} = useParams();
  const towerFloors = floors[towerId] || [];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFloorId, setSelectedFloorId] = useState(null);

  const handleSelectFloor = floor => {
    console.log("Selected floor:", floor);
    setIsModalVisible(true);
    setSelectedFloorId(floor.number);
  }

  return (
    <div>
      {towerFloors.length > 0 ? (
      <CardList 
        data={towerFloors}
        onSelect={handleSelectFloor} />
      ) : (
        <p className="text-gray-500">No floors available for this tower.</p>
      )}

      <Modal
        title="Select an Apartment"
        onClose={() => setIsModalVisible(false)}
        isVisible={isModalVisible}
      >
        <ApartmentGrid towerId={towerId} floorId={selectedFloorId} />
      </Modal>
    </div>
  )
}
