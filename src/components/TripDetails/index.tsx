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
import { Countdown } from "../Countdown";
import { getDaysLeft } from "./utils";

interface TripDetailsProps extends Trip {
  showCountdown?: boolean;
}

export const TripDetails: React.FC<TripDetailsProps> = (props) => {
  const { title, description, itinerary, status } = props;
  const { showCountdown, ...tripData } = props;

  const dispatch = useDispatch();

  const handleClickStatus = (newStatus: boolean) => {
    dispatch(
      editTripAction({
        ...tripData,
        status: newStatus ? TripStatuses.DONE : TripStatuses.TODO,
      }) as unknown as UnknownAction
    );
  };

  return (
    <Container>
      <HeadingImage {...tripData} />
      <ContentContainer>
        <Title>{title}</Title>
        {showCountdown ? (
          <Countdown days={getDaysLeft(tripData)} />
        ) : (
          <TickButton
            isActive={status === TripStatuses.DONE}
            onClick={handleClickStatus}
          />
        )}
        <Description>{description}</Description>
        {itinerary && itinerary.length && (
          <div>
            {" "}
            <ItineraryTitle>Itinerary</ItineraryTitle>
            <Itinerary data={itinerary} />
          </div>
        )}
      </ContentContainer>
    </Container>
  );
};
