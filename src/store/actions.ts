import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteTripById, editTripById } from "@/http/fetchData";
import { Trip } from "@/types/index";

export const deleteTripByIdAction = createAsyncThunk(
  "trips/deleteTripById",
  async (tripId: number, { rejectWithValue }) => {
    try {
      await deleteTripById(tripId);
      return tripId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editTripAction = createAsyncThunk(
  "trips/editTrip",
  async (editedTrip: Trip, { rejectWithValue }) => {
    try {
      const data = await editTripById(editedTrip);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
