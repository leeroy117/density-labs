import React from 'react';

interface ModalProps {
  isOpen: boolean; 
  onClose: () => void; 
  children: React.ReactNode; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-secondary bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-primary p-6 rounded-lg shadow-lg max-w-lg w-full ">
        {children}
      </div>
    </div>
  );
};

export default Modal;