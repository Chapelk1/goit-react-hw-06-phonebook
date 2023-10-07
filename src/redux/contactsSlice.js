import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {allContacts:[]},
  reducers: {
    addContact(state, action) {
      state.allContacts.unshift(action.payload);
    },
    deleteContact(state, action) {
      const filteredContacts = state.allContacts.filter(contact => contact.id !== action.payload)
      return { allContacts: filteredContacts };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;