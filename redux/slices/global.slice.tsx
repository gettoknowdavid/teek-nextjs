import { createSlice } from '@reduxjs/toolkit';
import { GlobalStateInterface } from '../../models/interfaces/global-state.interface';

const initialState = {
  settings: undefined,
  drawerIsOpen: false,
} as GlobalStateInterface;

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleDrawer: (state) => ({
      ...state, drawerIsOpen: !state.drawerIsOpen,
    }),
  },
});

export const { toggleDrawer } = globalSlice.actions;

export default globalSlice.reducer;
