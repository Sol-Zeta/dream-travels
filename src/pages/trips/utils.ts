import { Trip, TripStatuses, TripStatusesRoutes } from "@/types/index";
import { ValueOf } from "next/dist/shared/lib/constants";

export const filterTrips = (
  trips: Trip[],
  tripStatus: ValueOf<TripStatusesRoutes>
): Trip[] => {
  console.log("TRIP STATUUUUUUUS", tripStatus);
  if (tripStatus === TripStatusesRoutes.ALL) {
    return trips;
  }
  const viewStatus =
    tripStatus === TripStatusesRoutes.UPCOMING
      ? TripStatuses.TODO
      : TripStatuses.DONE;
  return trips.filter((trip: Trip) => trip.status === viewStatus);
};
