import { filterTrips } from "../utils";
import { TripStatuses, TripStatusesRoutes } from "../../../types";
import tripsData from "../../../../jest/mockData/cleanedMockTripsData.json";

describe("tripDescription function", () => {
  it("if tripStatus is All it retuns the same array", () => {
    expect(filterTrips(tripsData, TripStatusesRoutes.ALL)).toHaveLength(tripsData.length);
  });
  it("if tripStatus is Completed it retuns only the items with status: 'done'", () => {
    const doneTrips = tripsData.filter(trip => trip.status === TripStatuses.DONE)
    expect(filterTrips(tripsData, TripStatusesRoutes.COMPLETED)).toHaveLength(doneTrips.length);
  });
  it("if tripStatus is Upcoming it retuns only the items with status: 'todo'", () => {
    const todoTrips = tripsData.filter(trip => trip.status === TripStatuses.TODO)
    expect(filterTrips(tripsData, TripStatusesRoutes.UPCOMING)).toHaveLength(todoTrips.length);
  });
});
