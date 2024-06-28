import React from "react";
import { GetServerSideProps } from "next";
import { styled } from "styled-components";
import { Trip, TripStatusesRoutes } from "@/types/index";
import { storeWrapper } from "@/store/index";
import { getTripsData } from "src/http/fetchData";
import Card from "@/components/Card";
import { getTrips, setTrips } from "@/store/slices/trips";
import { useSelector } from "react-redux";

// interface TripTypologyProps {
//   tripStatus: string;
//   tripsList: Trip[];
// }

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const TripTypology: React.FC = () => {
  const { trips } = useSelector(getTrips);
  console.log({trips})
  return (
    <Container>
      {trips.length ? (
        trips.map((trip: Trip) => (
          <Card key={`${trip.id}-${trip.title}`} {...trip} />
        ))
      ) : (
        <p>No trips found</p>
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
