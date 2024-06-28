import { createReducer, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Trip } from "@/types/index";
import { AppState } from "@/store/index";

export interface TripList {
  trips: Trip[];
  value: number;
}

const initialState: TripList = {
  trips: [],
  value: 0,
};

createReducer(initialState, builder => {
  builder.addCase(HYDRATE, (state, action) => {
    state.value = 80000;
  })
})

export const tripsSlice: Slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setTrips: (state, action) => {
      return {
        ...state,
        trips: action.payload
      }
    },
    deleteTrip: (state) => {
    },
    editTrip: (state) => {
    },
  },
  extraReducers: builder => {
    builder.addCase(HYDRATE, (state, action: any) => {
    return {
      ...state,
      ...action.payload.trips
    }
    
    })
  },
});

export const { setTrips, deleteTrip, editTrip } =
  tripsSlice.actions;

export const getTrips = (state: AppState) => state.trips;

export default tripsSlice.reducer;
