import React from "react";
import { ItineraryContainer } from "./styles";
import { TripItinerary } from "@/types/index";
import { ItineraryItem } from "./ItineraryItem";

interface ItineraryProps {
  data: TripItinerary[];
}

export const Itinerary = ({ data }: ItineraryProps) => {
  return (
    <ItineraryContainer>
      {data.map((day, index) => (
        <ItineraryItem key={`${index}-${day.location}`} {...day} />
      ))}
    </ItineraryContainer>
  );
};
