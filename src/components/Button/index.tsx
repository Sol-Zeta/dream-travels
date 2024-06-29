import React from "react";
import { ValueOf } from "next/dist/shared/lib/constants";
import { StyledButton } from "./styles";

export enum ButtonVariants {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}
export enum ButtonSizes {
  LARGE = "LARGE",
  REGULAR = "REGULAR",
}

export interface ButtonProps {
  variant?: ValueOf<ButtonVariants>;
  size?: ValueOf<ButtonSizes>;
  children: React.ReactNode;
  onClick: () => void;
  type?: string;
}

const Button = ({
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.REGULAR,
  children,
  onClick,
  type
}: ButtonProps) => {
  return (
    <StyledButton type={type} size={size} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
