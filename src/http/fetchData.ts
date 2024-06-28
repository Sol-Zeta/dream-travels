import axios from "axios";
import { Trip, TripStatusesRoutes } from "@/types/index";

const baseUrl =
  "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels";

export const TripStatusMap = {
  [TripStatusesRoutes.ALL]: "",
  [TripStatusesRoutes.UPCOMING]: "todo",
  [TripStatusesRoutes.COMPLETED]: "done",
};

export const getTripsData = async (
  tripStatus?: TripStatusesRoutes
): Promise<Trip> => {
  const url =
    !tripStatus || tripStatus === TripStatusesRoutes.ALL
      ? baseUrl
      : `${baseUrl}?status=${TripStatusMap[tripStatus]}`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch trips ${tripStatus}: ${error.message}`);
  }
};

export const deleteTripById = async (
  tripId?: number
): Promise<void> => {
  const url = `${baseUrl}/${tripId}`
  try {
    const { data } = await axios.delete(url);
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch trips: ${error.message}`);
  }
};
