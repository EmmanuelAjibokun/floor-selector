import Card from "./Card";
import placeholderImg from "../assets/placeholder.png";

export default function CardList({data}) {
  return (
    data.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <Card
            key={item.id}
            description={item.description}
            imageUrl={item.image || placeholderImg}
            meta={{
              area: item.area,
              rooms: item.rooms,
              id: item.id
            }}
          />
        ))}
      </div>
    ) : (
      <p className="text-gray-500">No items available.</p>
    )
  )
}
