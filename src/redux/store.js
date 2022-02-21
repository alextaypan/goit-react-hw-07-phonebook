import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducer";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  logger,
  // devTools: process.env.NODE_ENV === "development",
});

export default store;
