import { createSlice } from '@reduxjs/toolkit';

const itemsInitialState = JSON.parse(
  window.localStorage.getItem('contacts')
) ?? [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsSlice = createSlice({
  name: 'items',
  initialState: itemsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
      // const index = state.findIndex(contact => contact.id === action.payload);
      // state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
