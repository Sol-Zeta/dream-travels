import {
  Trip,
  TripItinerary,
  TripStatuses,
  TripStatusesRoutes,
} from "@/types/index";
import { ValueOf } from "next/dist/shared/lib/constants";

export const filterTripsByStatus = (
  trips: Trip[],
  tripStatus: ValueOf<TripStatusesRoutes>
): Trip[] => {
  if (tripStatus === TripStatusesRoutes.ALL) {
    return trips;
  }
  const viewStatus =
    tripStatus === TripStatusesRoutes.UPCOMING
      ? TripStatuses.TODO
      : TripStatuses.DONE;
  return trips.filter((trip: Trip) => trip.status === viewStatus);
};

export const filterTripsByFilter = (tripsData: Trip[], filter: string) => {
  if (!filter) return tripsData;
  const result = tripsData.filter((trip: Trip) => {
    const { title, description, itinerary } = trip;

    if (
      title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      description.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    ) {
      return true;
    }
    const itineraryMatches = itinerary.filter((day) => {
      const { location, description } = day;
      if (
        location.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        description.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      ) {
        return true;
      }
    });
    if (itineraryMatches.length) {
      return true;
    }

    return false;
  });

  return result;
};
