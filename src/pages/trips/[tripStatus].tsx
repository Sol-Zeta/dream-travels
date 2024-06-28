import React from "react";
import { GetServerSideProps } from "next";
import { styled } from "styled-components";
import { Trip, TripStatusesRoutes } from "@/types/index";
import { fetchTrips } from "src/http/fetchData";
import Card from "@/components/Card";

interface TripTypologyProps {
  tripStatus: string;
  tripsList: Trip[];
}

const Container =  styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

const TripTypology: React.FC<TripTypologyProps> = ({
  tripsList,
  tripStatus,
}) => {
  return (
    <Container>
      {tripsList.length ? (
        tripsList.map((trip) => <Card key={`${trip.id}-${trip.title}`} {...trip} />)
      ) : (
        <p>No trips found</p>
      )}
    </Container>
  );
};

export default TripTypology;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Fetch data from an external API or database
  const tripsList = await fetchTrips(params?.tripStatus as TripStatusesRoutes);

  // Pass data to the page via props
  return {
    props: {
      tripStatus: params?.tripStatus,
      tripsList,
    },
  };
};
