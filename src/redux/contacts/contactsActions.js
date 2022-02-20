import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add");

export const removeContact = createAction("contacts/remove");

export const filterContacts = createAction("contacts/filter", (e) => {
  return {
    payload: e.target.value,
  };
});
