import React from "react";
import classnames from "classnames";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalClasses = classnames("fixed inset-0 z-10", {
    hidden: !isOpen,
  });

  return (
    <div className={modalClasses}>


      
      <div
        className="absolute inset-0 bg-gray-900 opacity-75"
        onClick={onClose}
      >

      </div>

      <div className="bg-white rounded-lg shadow-lg p-4 mx-4 md:mx-auto mt-4 md:mt-32 z-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose}>
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>



    </div>
  );
};

export default Modal;
