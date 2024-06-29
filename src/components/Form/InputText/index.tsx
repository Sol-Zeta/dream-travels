import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputContainer, Label, StyledInput } from "../styles";

interface TextInputProps {
  id: string;
  label: string;
  defaultValue?: string;
  register: UseFormRegister<FieldValues>;
}

const TextInput = ({ id, label, register, defaultValue = '' }: TextInputProps) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput id={id} {...register(id)} defaultValue={defaultValue}/>
    </InputContainer>
  );
};

export default TextInput;
