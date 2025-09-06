import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSection: 'home',
  mobileMenuOpen: false,
  snackbarOpen: false,
  snackbarMessage: '',
  snackbarSeverity: 'info',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentSection: (state, action) => {
      state.currentSection = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    showSnackbar: (state, action) => {
      state.snackbarOpen = true;
      state.snackbarMessage = action.payload.message;
      state.snackbarSeverity = action.payload.severity;
    },
    hideSnackbar: (state) => {
      state.snackbarOpen = false;
    },
  },
});

export const { setCurrentSection, toggleMobileMenu, showSnackbar, hideSnackbar } = uiSlice.actions;
export default uiSlice.reducer;
