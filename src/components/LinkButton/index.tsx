import React from "react";
import styled from "styled-components";
import { ValueOf } from "next/dist/shared/lib/constants";

export enum ButtonVariants {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

interface ButtonProps {
  variant?: ValueOf<ButtonVariants>;
  children: React.ReactNode;
  onClick: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  color: ${({ variant = ButtonVariants.PRIMARY, theme }) =>
    variant === ButtonVariants.SECONDARY
      ? theme.colors.red
      : theme.colors.black};
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const LinkButton = ({
  variant = ButtonVariants.PRIMARY,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default LinkButton;
