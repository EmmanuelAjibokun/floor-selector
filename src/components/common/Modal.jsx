// Pass the title as a prop and the content of a child to this global modal component

const Modal = ({ isVisible, onClose, children, title }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 overflow-hidden z-[100]"
      style={{ background: "rgba(0,0,0,0.8)" }}
      onClick={onClose}
    >
      <div
        className="relative p-4 bg-white rounded-lg shadow-lg w-11/12 max-w-3xl max-h-[90vh] lg:max-w-4xl lg:p-9 lg:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="font-semibold mb-1.5 lg:text-xl lg:mb-5">{title}</h1>
        <hr className="bg-[#B3B3B3] mb-2.5 lg:mb-4 h-[1.5px] lg:h-0.5" />
        <section
          className="overflow-y-auto pb-2 pl-0.5 pr-3"
          style={{ maxHeight: 'calc(90vh - 100px)' }}
        >
          {children}
        </section>
        <button
          className="absolute top-4 right-4 lg:top-9 lg:right-9 text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={onClose}
        >
          <svg
            className="lg:scale-150"
            width="9"
            height="11"
            viewBox="0 0 9 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.77118 8.92339C8.89041 9.04728 8.95739 9.21531 8.95739 9.39052C8.95739 9.56573 8.89041 9.73376 8.77118 9.85766C8.65196 9.98155 8.49025 10.0511 8.32164 10.0511C8.15303 10.0511 7.99132 9.98155 7.87209 9.85766L4.51426 6.36734L1.15537 9.85656C1.03614 9.98045 0.874433 10.05 0.705821 10.05C0.537209 10.05 0.375503 9.98045 0.256276 9.85656C0.137049 9.73267 0.0700684 9.56463 0.0700684 9.38942C0.0700684 9.21421 0.137049 9.04618 0.256276 8.92229L3.61517 5.43308L0.257334 1.94276C0.138107 1.81887 0.0711261 1.65084 0.0711261 1.47563C0.0711261 1.30042 0.138107 1.13239 0.257334 1.0085C0.37656 0.884604 0.538266 0.815003 0.706878 0.815003C0.87549 0.815003 1.0372 0.884604 1.15642 1.0085L4.51426 4.49881L7.87315 1.00795C7.99238 0.884055 8.15408 0.814453 8.3227 0.814453C8.49131 0.814453 8.65301 0.884055 8.77224 1.00795C8.89147 1.13184 8.95845 1.29987 8.95845 1.47508C8.95845 1.65029 8.89147 1.81832 8.77224 1.94221L5.41335 5.43308L8.77118 8.92339Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;