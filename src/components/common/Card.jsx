import imagePlaceholder from "../../assets/image.png"; // Adjust the path as necessary

const Card = ({
  title,
  description,
  imageUrl = imagePlaceholder,
  meta = {},
  onClick = () => {},
}) => {
  return (
    <div 
      className="cursor-pointer max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
      onClick={onClick}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        {title && <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>}

        {/* Description */}
        {description && <p className="text-gray-600 mb-4">{description}</p>}

        {/* Metadata (e.g., area, room count) */}
        {Object.keys(meta).length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {Object.entries(meta).map(([key, value]) => (
              <span
                key={key}
                className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-700"
              >
                {key}: {value}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;