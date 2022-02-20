import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact, filterContacts } from "./contactsActions";

const itemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],

  [removeContact]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

const filterReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
