import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { Trip, TripStatusesRoutes } from "@/types/index";
import { storeWrapper } from "@/store/index";
import { getTripsData } from "@/http/fetchData";
import { getTrips, setTrips } from "@/store/slices/trips";
import { useSelector } from "react-redux";
import Card from "@/components/Card";
import { ValueOf } from "next/dist/shared/lib/constants";
import { filterTripsByStatus, filterTripsByFilter } from "./utils";
import { Container } from "./styles";
import { useSearchContext } from "@/context/SearchContext";

interface TripTypologyProps {
  tripStatus: ValueOf<TripStatusesRoutes>;
}

const TripTypology: React.FC<TripTypologyProps> = ({ tripStatus }) => {
  const { trips } = useSelector(getTrips);
  const { filter } = useSearchContext() || { filter: "" };

  const [tripsData, setTripsData] = useState<Trip[]>([]);

  useEffect(() => {
    const tripsToShow = filterTripsByStatus(trips, tripStatus);
    setTripsData(tripsToShow);
  }, [trips, tripStatus]);

  useEffect(() => {
    const tripsToShow = filterTripsByFilter(
      filterTripsByStatus(trips, tripStatus),
      filter
    );
    setTripsData(tripsToShow);
  }, [filter]);

  return (
      <Container>
        {tripsData.length ? (
          tripsData.map((trip: Trip) => (
            <Card key={`${trip.id}-${trip.title}`} {...trip} />
          ))
        ) : (
          <p>No trips found ✈️</p>
        )}
      </Container>
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
