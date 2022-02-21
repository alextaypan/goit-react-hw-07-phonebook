import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./contactsOperations";
import * as contactsActions from "./contactsActions";

const setInfo = (_state, { payload }) => payload;

const itemsReducer = createReducer([], {
  [fetchContacts.fulfilled]: setInfo,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload.id),
});

const isLoadingReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: setInfo,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: setInfo,
  [addContact.pending]: null,
  [removeContact.rejected]: setInfo,
  [removeContact.pending]: null,
});

const filterReducer = createReducer("", {
  [contactsActions.filterContacts]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  contacts: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default contactsReducer;
