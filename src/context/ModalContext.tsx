import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ModalContextProps {
    isOpen: boolean;
    modalContent: ReactNode;
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
  }

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children } : { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, modalContent, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
