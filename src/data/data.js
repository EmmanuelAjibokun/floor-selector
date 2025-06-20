import placeholderImg from "../assets/placeholder.png";
import structureImg from "../assets/structure.png";
import collapsedImg from "../assets/collapsed.png";
import houseImg from "../assets/previews/house.png";
import HouseModel from "../../public/House";

export const towers = [
  {
    "id": "A",
    "name": "Tower A",
    "description": "Luxury waterfront living",
    "floors": Array.from({ length: 12 }, (_, i) => i + 1), // 12 floors
    "image": placeholderImg
  },
  {
    "id": "B",
    "name": "Tower B",
    "description": "Urban boss residences",
    "floors": Array.from({ length: 13 }, (_, i) => i + 1), // 13 floors
    "image": placeholderImg
  },
  {
    "id": "C",
    "name": "Tower C",
    "description": "Executive family homes",
    "floors": Array.from({ length: 15 }, (_, i) => i + 1), // 15 floors
    "image": placeholderImg
  }
];

export const floors = {
  "A": Array.from({ length: 12 }, (_, i) => ({
    "number": i + 1,
    "description": `Tower A - Floor ${i + 1} description`,
    "image": collapsedImg
  })),
  "B": Array.from({ length: 13 }, (_, i) => ({
    "number": i + 1,
    "description": `Tower B - Floor ${i + 1} description`,
    "image": collapsedImg
  })),
  "C": Array.from({ length: 15 }, (_, i) => ({
    "number": i + 1,
    "description": `Tower C - Floor ${i + 1} description`
  }))
};

function makeLayouts(towerId, floorCount) {
  const types = [
    { type: "1-Bedroom", area: "700 sqft", rooms: 1, img: structureImg, model: HouseModel },
    { type: "2-Bedroom", area: "900 sqft", rooms: 2, img: collapsedImg, model: HouseModel },
    { type: "3-Bedroom", area: "1200 sqft", rooms: 3, img: houseImg, model: HouseModel },
    { type: "Penthouse", area: "2000 sqft", rooms: 4, img: placeholderImg, model: HouseModel },
  ];
  const layouts = {};
  for (let f = 1; f <= floorCount; f++) {
    layouts[f] = Array.from({ length: 4 }, (_, i) => ({
      id: `${towerId}${f}-${100 + i + 1}`,
      image: types[i % types.length].img,
      model: types[i % types.length].model,
      meta: {
        type: types[i % types.length].type,
        area: types[i % types.length].area,
        rooms: types[i % types.length].rooms
      }
    }));
  }
  return layouts;
}

export const layouts = {
  "A": makeLayouts("A", 12),
  "B": makeLayouts("B", 13),
  "C": makeLayouts("C", 15)
};
