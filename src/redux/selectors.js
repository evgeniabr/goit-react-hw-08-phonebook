import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filters;
export const selectLoading = state => state.contacts.loading;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, filter) => {

  if (contacts && filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
  }
    return contacts;
})