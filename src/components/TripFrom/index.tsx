import { Trip } from "@/types/index";
import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  FormContainer,
  Title,
  InputsContainer,
  ButtonContainer,
} from "./styles";
import InputText from "@/components/Form/InputText";
import { InputTextArea } from "@/components/Form/InputTextArea";
import Button, { ButtonSizes } from "@/components/Button";
import { editTripAction } from "@/store/actions";
import { UnknownAction } from "@reduxjs/toolkit";
import { useModal } from "@/context/ModalContext";

const TripForm: React.FC<Trip> = (props) => {
  const { title, description, photo_url } = props;

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const { closeModal }: any = useModal();

  const onSubmit = (data: any) => {
    dispatch(editTripAction({ ...props, ...data }) as unknown as UnknownAction);
    closeModal();
  };

  return (
    <FormContainer>
      <InputsContainer>
        <Title>{`Edit ${title} Trip`}</Title>
        <InputText
          id={"title"}
          label={"Name"}
          register={register}
          defaultValue={title}
        />
        <InputTextArea
          id={"description"}
          label={"Description"}
          register={register}
          defaultValue={description}
          rows={8}
        />
        <InputText
          id={"image"}
          label={"Image"}
          register={register}
          defaultValue={photo_url}
        />
      </InputsContainer>
      <ButtonContainer>
        <Button
          type={"button"}
          onClick={handleSubmit(onSubmit)}
          size={ButtonSizes.LARGE}
        >
          Save
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default TripForm;
