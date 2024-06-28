import { Trip } from "@/types/index";

/**
 * Returns the tripsList removing those that don't have itinerary.
 * @param {Trip[]} tripsList
 * @returns {number}
 */
export const cleanTrips = (tripsList: Trip[]): Trip[] =>
  tripsList.filter((trip: Trip) => trip.itinerary.length);
