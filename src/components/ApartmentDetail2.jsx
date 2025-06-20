// src/components/ApartmentDetails.jsx
import { useState, useRef, Suspense } from 'react';
import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn, FiZoomOut, FiRotateCw } from 'react-icons/fi';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './ApartmentDetail.css';

// 3D Viewer Component
const ModelViewer = ({ ModelComponent, onZoomIn, onZoomOut, onReset }) => {
  const { camera } = useThree();
  const controlsRef = useRef();
  
  const handleZoomIn = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyIn(0.5);
    }
  };
  
  const handleZoomOut = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyOut(0.5);
    }
  };
  
  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
      camera.position.set(0, 3, 10);
      camera.lookAt(0, 0, 0);
    }
  };
  
  // Pass the handlers back to parent
  onZoomIn.current = handleZoomIn;
  onZoomOut.current = handleZoomOut;
  onReset.current = handleReset;
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {ModelComponent && <ModelComponent />}
      
      <OrbitControls 
        ref={controlsRef}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={3}
        maxDistance={20}
      />
      <Environment preset="city" />
    </>
  );
};

// Controls Overlay
const ModelControls = ({ onZoomIn, onZoomOut, onReset }) => {
  return (
    <div className="absolute bottom-4 right-4 flex gap-3 bg-black bg-opacity-50 p-2 rounded-lg z-10">
      <button 
        onClick={() => onZoomIn?.()}
        className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all"
        title="Zoom In"
      >
        <FiZoomIn size={18} />
      </button>
      <button 
        onClick={() => onZoomOut?.()}
        className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all"
        title="Zoom Out"
      >
        <FiZoomOut size={18} />
      </button>
      <button 
        onClick={() => onReset?.()}
        className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all"
        title="Reset View"
      >
        <FiRotateCw size={18} />
      </button>
    </div>
  );
};

const ApartmentDetail2 = ({ apartment, apartments, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(
    apartments.findIndex(a => a.id === apartment.id)
  );
  
  const currentApartment = apartments[currentIndex];
  const [direction, setDirection] = useState('right');
  const nodeRef = useRef(null);
  
  // Refs for model controls
  const zoomInRef = useRef(null);
  const zoomOutRef = useRef(null);
  const resetRef = useRef(null);
  
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
      style={{ background: "rgba(0,0,0,0.95)" }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl z-10 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
      >
        <FiX />
      </button>
      
      {/* 3D Model Viewer */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="relative w-full max-w-4xl h-[400px] md:h-[600px] rounded-xl overflow-hidden">
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={currentApartment.id}
              nodeRef={nodeRef}
              timeout={300}
              classNames={direction === 'right' ? 'slide-right' : 'slide-left'}
              unmountOnExit
            >
              <div ref={nodeRef} className="w-full h-full">
                <Suspense fallback={
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <div className="text-white text-lg">Loading 3D model...</div>
                  </div>
                }>
                  <Canvas shadows>
                    <PerspectiveCamera makeDefault position={[0, 3, 10]} fov={50} />
                    <ModelViewer 
                      ModelComponent={currentApartment.model} 
                      onZoomIn={zoomInRef}
                      onZoomOut={zoomOutRef}
                      onReset={resetRef}
                    />
                  </Canvas>
                </Suspense>
              </div>
            </CSSTransition>
          </SwitchTransition>
          
          <ModelControls
            onZoomIn={() => zoomInRef.current?.()}
            onZoomOut={() => zoomOutRef.current?.()}
            onReset={() => resetRef.current?.()}
          />
        </div>
      </div>
      
      {/* Apartment Info */}
      <div className="w-full max-w-4xl mx-auto p-4 text-white">
        <h2 className="text-2xl font-bold mb-2">{currentApartment.name}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {Object.entries(currentApartment.meta).map(([key, value]) => (
            <div key={key} className="bg-gray-800 p-3 rounded-lg">
              <p className="text-sm text-gray-400">{key}</p>
              <p className="font-bold">{value}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#273187] bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all cursor-pointer active:scale-95 z-10"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#273187] bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all cursor-pointer active:scale-95 z-10"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default ApartmentDetail2;