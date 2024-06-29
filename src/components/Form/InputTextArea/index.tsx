import React from "react";
import { InputContainer, Label, StyledTextarea } from "../styles";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputTextAreaProps {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  rows?: number;
  defaultValue?: string;
}

export const InputTextArea = ({
  id,
  label,
  register,
  rows = 5,
  defaultValue = ''
}: InputTextAreaProps) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <StyledTextarea id={id} {...register(id)} rows={rows}>
        {defaultValue}
      </StyledTextarea>
    </InputContainer>
  );
};
