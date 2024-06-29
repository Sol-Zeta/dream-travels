import React from "react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { CloseButton, ModalBackground, ModalContainer } from "./styles";
import CloseIcon from "@/assets/close-icon.png";

export const Modal = () => {
  const { isOpen, modalContent, closeModal } = useModal() || {
    isOpen: false,
  };

  if (!isOpen) return null;

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()} data-testid="modal">
        <CloseButton onClick={closeModal} data-testid="close-modal">
          <Image src={CloseIcon} width={16} height={16} alt="close icon" />
        </CloseButton>
        {modalContent}
      </ModalContainer>
    </ModalBackground>
  );
};
