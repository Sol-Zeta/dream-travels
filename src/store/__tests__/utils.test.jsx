import { cleanTrips } from "../utils";
import mockTripsData from "../../../jest/mockData/mockTripsData.json";
import cleanedMockTripsData from "../../../jest/mockData/cleanedMockTripsData.json";

describe("cleanTrips function", () => {
  it("returns a list of trips that have itineraries", () => {
    expect(mockTripsData).toEqual(expect.arrayContaining(cleanedMockTripsData));
  });
});
