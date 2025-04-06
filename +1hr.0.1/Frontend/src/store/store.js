import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./featues/authSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
