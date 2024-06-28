import { Trip, TripStatuses } from "@/types/index";
import React from "react";
import {
  Container,
  ContentContainer,
  Description,
  HeadingImage,
  ItineraryTitle,
  Title,
} from "./styles";
import { Itinerary } from "./Itinerary";
import { TickButton } from "../TickButton";
import { useDispatch } from "react-redux";
import { editTripAction } from "@/store/actions";
import { UnknownAction } from "@reduxjs/toolkit";

export const TripDetails: React.FC<Trip> = (props) => {
  const { title, description, itinerary, status } = props;

  const dispatch = useDispatch();

  const handleClickStatus = (newStatus: boolean) => {
    dispatch(
      editTripAction({
        ...props,
        status: newStatus ? TripStatuses.DONE : TripStatuses.TODO,
      }) as unknown as UnknownAction
    );
  };

  return (
    <Container>
      <HeadingImage {...props} />
      <ContentContainer>
        <Title>{title}</Title>
        <TickButton
          isActive={status === TripStatuses.DONE}
          onClick={handleClickStatus}
        />
        <Description>{description}</Description>
        <ItineraryTitle>Itinerary</ItineraryTitle>
        <Itinerary data={itinerary} />
      </ContentContainer>
    </Container>
  );
};
