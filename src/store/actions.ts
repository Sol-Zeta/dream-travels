import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteTripById } from "@/http/fetchData";

export const deleteTripByIdAction = createAsyncThunk(
    'trips/deleteTripById',
    async (tripId: number, { rejectWithValue }) => {
      try {
        await deleteTripById(tripId);
        return tripId;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );