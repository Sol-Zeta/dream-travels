import { createReducer, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Trip, TripStatuses } from "@/types/index";
import { AppState } from "@/store/index";
import { cleanTrips } from "../utils";
import { deleteTripById } from "@/http/fetchData";
import { deleteTripByIdAction } from "../actions";

export interface TripList {
  trips: Trip[];
  upcomingTrips: Trip[];
  completedTrips: Trip[];
  error: string | null;
  value: number;
}

const initialState: TripList = {
  trips: [],
  upcomingTrips: [],
  completedTrips: [],
  error: '',
  value: 0,
};

createReducer(initialState, (builder) => {
  builder.addCase(HYDRATE, (state, action) => {
    state.value = 80000;
  });
});

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
    deleteTrip: (state, action) => {
      return {
        ...state,
        trips: state.trips.filter((trip: Trip) => trip.id !== action.payload),
      };
    },
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.trips,
      };
    });
    builder.addCase(deleteTripByIdAction.fulfilled, (state, action) => {
      return {
        ...state,
        trips: state.trips.filter((trip: Trip) => trip.id !== action.payload),
      };
    })
    builder.addCase(deleteTripByIdAction.rejected, (state, action) => {
      return {
        ...state,
        error: action.error.message || 'Failed to delete trip',
      };
    });
  },
});

export const { setTrips, deleteTrip, increment, decrement, incrementByAmount } =
  tripsSlice.actions;

export const getTrips = (state: AppState) => state.trips;

export default tripsSlice.reducer;
