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
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant = ButtonVariants.PRIMARY, theme }) =>
    variant === ButtonVariants.SECONDARY
      ? theme.colors.white
      : theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 12px;
`;

const Button = ({
  variant = ButtonVariants.PRIMARY,
  children,
}: ButtonProps) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;
