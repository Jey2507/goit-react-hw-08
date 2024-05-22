import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectContacts, selectName } from "./selectors";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items:[],
        loading: false,
        error: false,
    },
    extraReducers: builder =>
        builder
          .addCase(fetchContacts.pending, state => {
            state.loading = true;
            state.error = false;
          })
          .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
          })
          .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(addContact.pending, state => {
            state.loading = true;
            state.error = false;
          })
          .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
          })
          .addCase(addContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(deleteContact.pending, state => {
            state.loading = true;
            state.error = false;
          })
          .addCase(deleteContact.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter((item) => item.id != action.payload.id)
          })
          .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
          })
})



export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error

export const selectFilteredContacts = createSelector(
    [selectContacts, selectName],
    (contatcs, textFilter) => {
      console.log("selectVisibleTasks");
      return contatcs.filter(contact =>
        contact.name.toLowerCase().includes(textFilter.toLowerCase())
      );
    }
  );

export default slice.reducer;