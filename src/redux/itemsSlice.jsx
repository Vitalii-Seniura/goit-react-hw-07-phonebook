import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operation';

// const itemsInitialState = JSON.parse(
//   window.localStorage.getItem('contacts')
// ) ?? [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
      // return state.filter(item => item.id !== action.payload);
      // const index = state.findIndex(contact => contact.id === action.payload);
      // state.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // addContact(state, action) {
    //   state.push(action.payload);
    // },
    // deleteContact(state, action) {
    //   return state.filter(item => item.id !== action.payload);
    //   const index = state.findIndex(contact => contact.id === action.payload);
    //   state.splice(index, 1);
    // },
  },
});

export const itemsReducer = itemsSlice.reducer;
