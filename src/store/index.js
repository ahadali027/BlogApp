import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { stateQueryApi } from "./slices/fetchApi";

import authSlice from "./slices/auth.slice";

const rootReducer = combineReducers({
  [stateQueryApi.reducerPath]: stateQueryApi.reducer,
  auth: authSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      stateQueryApi.middleware
    ),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
