import { ValueOf } from "next/dist/shared/lib/constants";

interface TripItinerary {
  day: number;
  location: string;
  description: string;
}

export enum TripStatuses {
    TODO = 'todo',
    DONE = 'done'
}

export enum TripStatusesRoutes {
    ALL = 'all',
    UPCOMING = 'upcoming',
    COMPLETED = 'completed'
}

export type TripStatus = ValueOf<TripStatuses>;

export interface Trip {
  id: number;
  title: string;
  description: string;
  photo_url: string;
  status: TripStatus;
  itinerary: TripItinerary;
}
