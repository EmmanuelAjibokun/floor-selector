// src/components/ApartmentDetails.jsx
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiX, FiHome } from 'react-icons/fi';
import { useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './ApartmentDetail.css'; // You need to create this CSS file

const ApartmentDetail = ({ apartment, apartments, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(
    apartments.findIndex(a => a.id === apartment.id)
  );

  const currentApartment = apartments[currentIndex];

  const [direction, setDirection] = useState('right');
  const nodeRef = useRef(null);

  const goToPrev = () => {
    setDirection('left');
    const prevIndex = (currentIndex - 1 + apartments.length) % apartments.length;
    setCurrentIndex(prevIndex);
  };

  const goToNext = () => {
    setDirection('right');
    const nextIndex = (currentIndex + 1) % apartments.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto"
      style={{ background: "rgba(0,0,0,0.9)" }}
    >
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 gap-6 md:gap-12">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-16 right-6 text-white text-3xl z-10"
        >
          <FiX />
        </button>

        {/* Image section with slide animation */}
        <div className="relative w-full max-w-2xl">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={currentApartment.id}
              nodeRef={nodeRef}
              timeout={300}
              classNames={direction === 'right' ? 'slide-right' : 'slide-left'}
              unmountOnExit
            >
              <div ref={nodeRef}>
                {currentApartment.image ? (
                  <img
                    src={currentApartment.image}
                    alt={currentApartment.name || "Apartment"}
                    className="w-full aspect-[4/3]"
                  />
                ) : (
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full aspect-[4/3] flex items-center justify-center text-gray-500">
                    Apartment Layout
                  </div>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

        {Object.keys(currentApartment.meta).length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {Object.entries(currentApartment.meta).map(([key, value]) => (
              <span
                key={key}
                className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-700"
              >
                {key}: {value}
              </span>
            ))}
          </div>
        )}

        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#273187] bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all cursor-pointer active:scale-95"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#273187] bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all cursor-pointer active:scale-95"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ApartmentDetail;