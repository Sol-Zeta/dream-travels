import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // Gray transparent background
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  height: 95%;
  z-index: 1001;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 500px;
    max-height: 90vh;
  }
  overflow: hidden;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.black};
  padding: 4px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;