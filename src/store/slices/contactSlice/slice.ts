import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getContactFromLS } from "./../../../util/getContactFromLs";
// import { ContactItem, ContactSliceState } from './types';

//  const initialState: ContactSliceState = getContactFromLS();

export type ContactItem = {
  id: string;
  name: string;
  email: string;
};

export interface ContactSliceState {
  items: ContactItem[];
}

const initialState: ContactSliceState = {
  items: [],
};

const contactSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<ContactItem>) {
      state.items.push({
        ...action.payload,
      });
      console.log(state);
    },
    removeContact(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;

export default contactSlice.reducer;
