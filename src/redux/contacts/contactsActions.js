import { createAction } from "@reduxjs/toolkit";

export const filterContacts = createAction("contacts/filter", (e) => {
  return {
    payload: e.target.value,
  };
});
