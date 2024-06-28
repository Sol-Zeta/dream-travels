import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { styled } from "styled-components";
import { Trip, TripStatusesRoutes } from "@/types/index";
import { storeWrapper } from "@/store/index";
import { getTripsData } from "@/http/fetchData";
import { getTrips, setTrips } from "@/store/slices/trips";
import { useSelector } from "react-redux";
import Card from "@/components/Card";
import { Modal } from "@/components/Modal";
import { ModalProvider } from "@/context/ModalContext";
import { ValueOf } from "next/dist/shared/lib/constants";
import { filterTrips } from "./utils";
import { Container } from "./styles";

interface TripTypologyProps {
  tripStatus: ValueOf<TripStatusesRoutes>;
}

const TripTypology: React.FC<TripTypologyProps> = ({ tripStatus }) => {
  const { trips } = useSelector(getTrips);
  const [tripsData, setTripsData] = useState<Trip[]>([]);

  useEffect(() => {
    const tripsToShow = filterTrips(trips, tripStatus);
    setTripsData(tripsToShow);
  }, [trips]);

  return (
    <ModalProvider>
      <Container>
        {tripsData.length ? (
          tripsData.map((trip: Trip) => (
            <Card key={`${trip.id}-${trip.title}`} {...trip} />
          ))
        ) : (
          <p>No trips found</p>
        )}
        <Modal />
      </Container>
    </ModalProvider>
  );
};

export default TripTypology;

export const getServerSideProps: GetServerSideProps =
  storeWrapper.getServerSideProps((store) => async ({ params }) => {
    const tripsList = await getTripsData(
      params?.tripStatus as TripStatusesRoutes
    );

    store.dispatch(setTrips(tripsList));

    return {
      props: {
        tripStatus: params?.tripStatus,
      },
    };
  });
