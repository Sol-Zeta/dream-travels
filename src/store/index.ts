import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { Action } from "redux";
import tripsReducer from "./slices/trips";
import { createWrapper } from "next-redux-wrapper";

export const store = () =>
  configureStore({
    reducer: {
      trips: tripsReducer,
    },
    devTools: true
  });

// export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const storeWrapper = createWrapper<AppStore>(store);
