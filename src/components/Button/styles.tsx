import styled from "styled-components";
import { ButtonProps, ButtonVariants } from ".";

export const StyledButton = styled.button<ButtonProps>`
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ variant = ButtonVariants.PRIMARY, theme }) =>
  variant === ButtonVariants.SECONDARY
    ? theme.colors.white
    : theme.colors.black};
color: ${({ variant = ButtonVariants.PRIMARY, theme }) =>
  variant === ButtonVariants.SECONDARY
    ? theme.colors.black
    : theme.colors.white};
border-radius: ${({ theme }) => theme.borderRadius.lg};
padding: 12px;
`;