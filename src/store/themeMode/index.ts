import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
interface ThemeState {
  mode: 'dark' | 'light';
}

// Define the initial state using that type
const initialState: ThemeState = {
  mode: localStorage.getItem('mode') === 'dark' ? 'dark' : 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    darkMode: (state) => {
      localStorage.setItem('mode', 'dark');
      state.mode = 'dark';
    },
    lightMode: (state) => {
      localStorage.setItem('mode', 'light');
      state.mode = 'light';
    },
  },
});

export const { darkMode, lightMode } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;
