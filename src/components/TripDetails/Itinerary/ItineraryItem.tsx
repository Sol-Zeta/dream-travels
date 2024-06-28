import React from "react";
import { DayContainer, DayDescription, DayHeading } from "./styles";
import { TripItinerary } from "@/types/index";

export const ItineraryItem = ({
  day,
  location,
  description,
}: TripItinerary) => {
  return (
    <DayContainer>
        <DayHeading>{`Day ${day}: ${location}`}</DayHeading>
        <DayDescription>{description}</DayDescription>
    </DayContainer>
  );
};
