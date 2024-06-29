import React from "react";
import { ValueOf } from "next/dist/shared/lib/constants";
import { StyledButton } from "./styles";

export enum ButtonVariants {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export interface ButtonProps {
  variant?: ValueOf<ButtonVariants>;
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({
  variant = ButtonVariants.PRIMARY,
  children,
  onClick
}: ButtonProps) => {
  return <StyledButton variant={variant} onClick={onClick}>{children}</StyledButton>;
};

export default Button;
