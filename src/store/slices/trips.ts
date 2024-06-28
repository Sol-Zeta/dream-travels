import { createReducer, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Trip } from "@/types/index";
import { AppState } from "@/store/index";
import { cleanTrips } from "../utils";
import { deleteTripByIdAction, editTripAction } from "../actions";
import { getTripsData } from "@/http/fetchData";

export interface TripList {
  trips: Trip[];
  upcomingTrips: Trip[];
  completedTrips: Trip[];
  error: string | null;
}

const initialState: TripList = {
  trips: [],
  upcomingTrips: [],
  completedTrips: [],
  error: "",
};

export const tripsSlice: Slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setTrips: (state, action) => {
      return {
        ...state,
        trips: cleanTrips(action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action: any) => {
        return {
          ...state,
          ...action.payload.trips,
        };
      })
      .addCase(deleteTripByIdAction.fulfilled, (state, action) => {
        return {
          ...state,
          trips: state.trips.filter((trip: Trip) => trip.id !== action.payload),
        };
      })
      .addCase(deleteTripByIdAction.rejected, (state, action) => {
        return {
          ...state,
          error: action.error.message || "Failed to delete trip",
        };
      })
      .addCase(editTripAction.fulfilled, (state, action) => {
        const editedTrips = state.trips.map((trip) => {
          if (trip.id === action.payload.id) {
            return action.payload;
          }
          return trip;
        });
        return {
          ...state,
          trips: editedTrips,
        };
      })
      .addCase(editTripAction.rejected, (state, action) => {
        return {
          ...state,
          error: action.error.message || "Failed to delete trip",
        };
      });
  },
});

export const { setTrips } = tripsSlice.actions;

export const getTrips = (state: AppState) => state.trips;

export default tripsSlice.reducer;
