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

export const TripDetails: React.FC<Trip> = (props) => {
  const { id, title, description, itinerary, status } = props;
  return (
    <Container>
      <HeadingImage {...props} />
      <ContentContainer>
        <Title>{title}</Title>
        <TickButton isActive={status === TripStatuses.DONE} onClick={() => {}}/>
        <Description>{description}</Description>
        <ItineraryTitle>Itinerary</ItineraryTitle>
        <Itinerary data={itinerary} />
      </ContentContainer>
    </Container>
  );
};
